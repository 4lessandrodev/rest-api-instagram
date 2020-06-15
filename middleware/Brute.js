require('connect-flash');
var ExpressBrute = require('express-brute'), MemcachedStore = require('express-brute-memcached'), moment = require('moment'), store;
require('dotenv').config();

module.exports = {
  lockManySolicitations: () => {
    if (process.env.ENVIRONMENT == 'development') {
      store = new ExpressBrute.MemoryStore();
    } else {
      store = new MemcachedStore([process.env.DOMAIN], {
        prefix: 'NoConflicts'
      });
    }

    var failCallback = function (req, res, next, nextValidRequestDate) {
      res.status(401).json({
        error: {
          msg: `You've made too many attempts in a short period of time, please try again later ${moment(nextValidRequestDate).fromNow()}`
        }
      }); // brute force protection triggered, send them back to the login page
    };


    var globalBruteforce = new ExpressBrute(store, {
      freeRetries: 50,
      attachResetToRequest: false,
      refreshTimeoutOnRequest: false,
      minWait: 25 * 1000, // few secounds
      maxWait: 25 * 60 * 1000, // 25 minutes
      lifetime: 24 * 60 * 60, // 1 day (seconds not milliseconds)
      failCallback: failCallback,
      //handleStoreError: handleStoreError
    });

    return globalBruteforce.prevent;
  }
};