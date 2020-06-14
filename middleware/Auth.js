const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");
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
      const bytes = CryptoJS.AES.decrypt(credential, secretHeaders);
      const user = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      if (user.email == undefined || user.password == undefined) {
        result.error = { msg: 'Invalid credential format in headers' };
        return result;
      }
      console.log(user);
      return user;
    } catch (error) {
      result.error = { msg: 'Invalid credential format in headers' };
      return result;
    }
  },
  
  //--------------------------------------------------------
  generateToken: (req, res, next, user) => {
    try {
      let secret = process.env.SECRET_HASHKEY;
      let token = jwt.sign(user, secret, { expiresIn: '1 minute' }); 
      return token;
    } catch (error) {
      return { error:{msg:'Could not generate token'} };
    }
  },
  
  //--------------------------------------------------------
  verifyToken: (req, res, next) => {
    try {
      if (!req.headers.authorization) {
        return res.status(401).json({ error: { msg: 'Token inválido' } });
      } else {
        const token = req.headers.authorization.substring(7);//init with Bearer
        const user = jwt.verify(token, process.env.SECRET_HASHKEY);
        if (!user.id) {
          return res.status(401).json({ error: { msg: 'Token inválido' } });
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
      if (!req.headers.authorization) {
        return res.status(401).json({ error: { msg: 'Invalid token' } });
      } else {
        const token = req.headers.authorization.substring(7);//init with Bearer
        const user = jwt.verify(token, process.env.SECRET_HASHKEY);
        if (!user.id) {
          return res.status(401).json({ error: { msg: 'Inválid token' } });
        } else {
          return decode;
        }
      }
    } catch (error) {
      return res.status(401).json({ error: { msg: 'Invalid token' } });
    }
  }
};
