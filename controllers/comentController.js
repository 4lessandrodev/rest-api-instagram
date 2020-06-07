const { Coment } = require('../models');
const sequelize = require('sequelize');

module.exports = {
  //-------------------------------------------------------
  list: async (req, res, next) => {
    try {
      let { limit = 5, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);
      const { postId } = req.params;
      const { count: size, rows: coments } = await Coment.findAndCountAll({
        where: { postId },
        limit: limit,
        offset: page * limit,
      });
      res.status(200).json({ coments, size });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  save: async (req, res) => {
    try {
      const { text, postId, userId } = req.body;
      const coment = await Coment.create({
        text,
        postId,
        userId,
      });
      res.status(200).json({ coment });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const coment = await Coment.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({ coment });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const { text } = req.body;
      const coment = await Coment.update(
        { text },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({ coment });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
};
