const { User } = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  //-------------------------------------------------------
  save: async (req, res) => {
    try {
      const { email, password, name, avatar } = req.body;
      const user = await User.create({
        email,
        password,
        name,
        avatar,
      });
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  edit: async (req, res) => {
    try {
      let { id } = req.params;
      let { email, password, name, avatar } = req.body;
      let user = await User.update(
        { email, password, name, avatar },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  delete: async (req, res) => {
    try {
      let id = req.params.id;
      let user = await User.destroy({
        where: { id },
      });
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  list: async (req, res) => {
    try {
      let users;
      let { limit } = req.query;
      if (limit) {
        users = await User.findAll({ limit });
      } else {
        users = await User.findAll();
      }
      res.status(200).json({ users });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  findByName: async (req, res) => {
    try {
      let name = req.params.name;
      let user = await User.findOne({
        where: {
          name: {
            [Op.like]: `'%${name}%'`,
          },
        },
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
      let user = await User.findByPk(id);
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error });
    }
  },
};
