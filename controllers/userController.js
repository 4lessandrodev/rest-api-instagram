const { User, Coment } = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { check, validationResult } = require('express-validator');
const fs = require('fs');


module.exports = {
  //-------------------------------------------------------
  save: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
      } 
      const { email, password, name } = req.body;
      const { file } = req;
      const avatar = file[0].path + file[0].filename;
      const exists = await User.findOne({ where: { email }, attributes: ['email'] });
      if (exists != null) {
        return res.status(401).json({ error: { message:'user already exists'} });
      }

      const user = await User.create({ email, password, name, avatar });
      user.password = undefined;
      res.status(200).json({ user });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  edit: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
      } 
      const { email, name } = req.body;
      const { file } = req;
      const avatar = file[0].path + file[0].originalname;
      //Usuário conectado
      const userId = 1;
      const exists = await User.findByPk(userId, { attributes: ['email', 'avatar'] });
      
      if (exists == null) {
        return res.status(404).json({ error: {message:'User not existis'} });
      }
      if (file[0]) {
        fs.unlinkSync(exists.avatar);
      }
      const user = await User.update(
        { email, password, name, avatar },
        { where: { id: userId } },
        {attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }},
      );
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  delete: async (req, res) => {
    try {
      //Usuário conectado
      const userId = 1;
      const exists = await User.findByPk(userId, { attributes: ['email', 'avatar'] });
      if (exists == null) {
        return res.status(404).json({ error: { message: 'User not existis' } });
      }
      fs.unlinkSync(exists.avatar);
      const user = await User.destroy({ where: { id: userId } });
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  list: async (req, res) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);
      const { count: size, rows: users } = await User.findAndCountAll({
        attributes: { exclude: ['password', 'createdAt', 'updatedAt']},
        limit,
        offset: page * limit,
      });
      res.status(200).json({ users, size });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error });
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
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } ,
      });
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error });
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
      res.status(401).json({ error });
    }
  },
};
