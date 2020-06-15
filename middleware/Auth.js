const jwt = require('jsonwebtoken');
const cryptoJS = require('crypto-js');
require('dotenv').config();

module.exports = {
  
  //--------------------------------------------------------
  decodeHeader: (req, res, next) => {
    let result = {};
    try {
      const secretHeaders = process.env.PUBLIC_HASH;
      if (!req.headers.credential) {
        result.error = { msg: 'Credential not found in headers' };
        return result;
      }
      const credential = req.headers.credential;
      const bytes = cryptoJS.AES.decrypt(credential, secretHeaders);
      if (bytes == '') {
        result.error = { msg: 'Invalid credential format in headers' };
        return result;
      }
      const user = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
      if (user.email == undefined) {
        result.error = { msg: 'Invalid credential format in headers' };
        return result;
      }
      return user;
    } catch (error) {
      console.log(error);
      result.error = { msg: 'Invalid credential format in headers' };
      return result;
    }
  },
  
  //--------------------------------------------------------
  generateToken: (req, res, next, user) => {
    try {
      let secret = process.env.SECRET_HASHKEY;
      let token = jwt.sign(user, secret, { expiresIn: '7 days' }); 
      return token;
    } catch (error) {
      return { error:{msg:'Could not generate token'} };
    }
  },
  
  //--------------------------------------------------------
  verifyToken: (req, res, next) => {
    try {
      if (!req.headers.authorization) {
        return res.status(401).json({ error: { msg: 'Invalid token' } });
      } else {
        const token = req.headers.authorization.substring(7);//init with Bearer
        const user = jwt.verify(token, process.env.SECRET_HASHKEY);
        if (!user.id) {
          return res.status(401).json({ error: { msg: 'Invalid token' } });
        } else {
          next();
        }
      }
    } catch (error) {
      return res.status(401).json({ error: { msg: 'Token expired' } });
    }
  },
  
  //--------------------------------------------------------
  decodeToken: (req, res)=>{
    try {
      const token = req.headers.authorization.substring(7);//init with Bearer
      const user = jwt.verify(token, process.env.SECRET_HASHKEY);
      return user;
    } catch (error) {
      return res.status(401).json({ error: { msg: 'Invalid token' } });
    }
  },

  //--------------------------------------------------------
  desconect: (req, res, user) => {
      let secret = process.env.SECRET_HASHKEY;
      let token = jwt.sign(user, secret, { expiresIn: '1ms' });
      return token;
  }
};
