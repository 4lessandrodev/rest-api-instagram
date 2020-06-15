const { User } = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const path = require('path');
const Auth = require('./../middleware/Auth');
const StoreImage = require('./../middleware/StoreImage');
const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = {
  //-------------------------------------------------------
  save: async (req, res, next) => {
    try {
      const { files } = req;
      const { name } = req.body;
      const USER = await Auth.decodeHeader(req, res, next);
      if (USER.error) {
        return res.status(401).json({ error: { msg: USER.error } });
      }
      
      if (!files) {
        return res.status(422).json({ error: { msg: 'Image is required' } });
      }
      
      if (!name) {
        await StoreImage.deleteUserAvatar(req);
        return res.status(422).json({ error: { msg: 'Name is required' } });
      }
      
      const { email, password } = USER;
      const exists = await User.findOne({ where: { email }, attributes: ['email'] });
      if (exists != null) {
        await StoreImage.deleteUserAvatar(req, res, next);
        return res.status(401).json({ error: { message: 'user already exists' } });
      }
      const avatar = path.join(process.env.PROTOCOL, process.env.DOMAIN + ':' + process.env.PORT, process.env.IMAGES_FOLDER,
        process.env.AVATAR_FOLDER_UPLOAD, files[0].filename);
        
      const encriptedPass = await bcrypt.hashSync(password, 10);
      const user = await User.create({ email, password:encriptedPass, name, avatar });
      user.password = undefined;
      const token = await Auth.generateToken(req, res, next, { id: user.id, email: user.email });
        
      res.status(200).json({ user, token });
        
    } catch (error) {
      await StoreImage.deleteUserAvatar(req);
      res.status(401).json({ error:{msg:'Couldn´t create user'} });
    }
  },
    
  //-------------------------------------------------------
  edit: async (req, res) => {
    try {

      const { email, name } = req.body;
      const { files } = req;
      let avatar;
      
      const conectedUser = await Auth.decodeToken(req, res);
      const userId = conectedUser.id;

      const exists = await User.findByPk(userId, { attributes: ['email', 'avatar'] });
      const emailAlreadyRegistered = await User.findOne({ where: { email }, attributes: ['email'] });
      if (emailAlreadyRegistered) {
        await StoreImage.deleteUserAvatar(req);
        return res.status(422).json({ error: { message: 'This email is already in use' } }); 
      }
        
      if (exists == null) {
        await StoreImage.deleteUserAvatar(req);
        return res.status(422).json({ error: { message: 'User not existis' } });
      }

      if (files[0]) {
        await StoreImage.deleteOldUserAvatar(exists.avatar);
        avatar = path.join(process.env.PROTOCOL, process.env.DOMAIN + ':' + process.env.PORT, process.env.IMAGES_FOLDER,
          process.env.AVATAR_FOLDER_UPLOAD, files[0].filename);
      }

      const user = await User.update(
        { email, name, avatar },
        { where: { id: userId } },
        { attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } },
      );
      res.status(200).json({ user });
    } catch (error) {
      await StoreImage.deleteUserAvatar(req);
      res.status(401).json({ error:{msg:'Couldn´t edit user'} });
    }
  },
        
  //-------------------------------------------------------
  delete: async (req, res) => {
    try {
      const conectedUser = await Auth.decodeToken(req, res);
      const userId = conectedUser.id;

      const exists = await User.findByPk(userId, { attributes: ['email', 'avatar'] });
      if (exists == null) {
        return res.status(422).json({ error: { message: 'User not existis' } });
      }
      
      await StoreImage.deleteOldUserAvatar(exists.avatar);

      const user = await User.destroy({ where: { id: userId } });
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t delete user'} });
    }
  },
        
  //-------------------------------------------------------
  list: async (req, res) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);
      const { count: size, rows: users } = await User.findAndCountAll({
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
        limit,
        offset: page * limit,
      });
      res.status(200).json({  size, users });
    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t list users'} });
    }
  },
        
  //-------------------------------------------------------
  findByName: async (req, res) => {
    try {
      const { name } = req.params;
      const user = await User.findAll({
        where: {
          name: { [Op.like]: `%${name}%` },
        },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      });
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t find user'} });
    }
  },
        
  //-------------------------------------------------------
  findById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id,
        {
          attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
        });
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t find user'} });
    }
  },
          
  //-------------------------------------------------------
  login: async (req, res, next) => {
    try {
      const USER = await Auth.decodeHeader(req, res, next);
      if (USER.error) {
        return res.status(401).json({ error: { msg: USER.error } });
      }
      let user = await User.findOne({ where: { email: USER.email } });
      const passMatch = bcrypt.compareSync(USER.password, user.password);
      if (!passMatch || user.email != USER.email) {
        return res.status(401).json({ error: { msg: 'User or password doesn´t match' } });
      }
      const token = await Auth.generateToken(req, res, next, { id: user.id, email: user.email });
      user.password = undefined;
      res.status(200).json({ user, token });
    } catch (error) {
      return res.status(401).json({ error: { msg: 'Invalid credential' } });
    }
  },

  //-------------------------------------------------------
  logout: async (req, res) => {
    try {
      let oldToken = await Auth.decodeToken(req, res);
      const { id, email } = oldToken;
      let token = await Auth.desconect(req, res, { id, email });
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ error: { msg: 'Invalid credential' } });
    }
  }

};
        