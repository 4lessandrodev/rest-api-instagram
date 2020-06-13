const { User, Coment } = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  //-------------------------------------------------------
  save: async (req, res) => {
    try {
      const { email, password, name, avatar } = req.body;
      const exists = await User.findOne({ where: { email }, attributes: ['email'] });
      if (exists != null) {
        res.status(401).json({ error: { message:'user already exists'} });
        return;
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
      const { email, password, name, avatar } = req.body;
      const { id } = req.params;
      const user = await User.update(
        { email, password, name, avatar },
        { where: { id } },
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
      const { id } = req.params;
      const user = await User.destroy({ where: { id } });
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
      let { name } = req.params;
      let user = await User.findAll({
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
      let { id } = req.params;
      let user = await User.findByPk(id,
        {
          attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
        });
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error });
    }
  },
};
