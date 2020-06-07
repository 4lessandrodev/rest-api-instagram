const { Coment } = require('../models');
const sequelize = require('sequelize');

module.exports = {
  //-------------------------------------------------------
  list: async (req, res, next) => {
    try {
      let { limit = 5, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);
      const { postsId } = req.params;
      const { count: size, rows: coments } = await Coment.findAndCountAll({
        where: { postsId },
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
      const { text, postsId, usersId } = req.body;
      const comment = await Coment.create({
        text,
        postsId,
        usersId,
      });
      res.status(200).json({ comment });
    } catch (error) {
      res.status(401).json({ error });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deleteComent = await Coment.destroy({
        where: {
          id
        }
      })
      res.status(200).json(deleteComent)

    } catch (error) {
      res.status(401).json({ error });
    }
  }
};
