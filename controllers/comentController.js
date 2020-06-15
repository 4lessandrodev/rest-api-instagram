const { Coment, Notification, Post, User } = require('../models');
const { validationResult } = require('express-validator');
const Auth = require('./../middleware/Auth');

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
        include: [
          {
            model: User, as: 'user_coment', attributes: ['id', 'name', 'avatar']
          }],
        limit: limit,
        offset: page * limit,
      });
      res.status(200).json({ size, coments });
    } catch (error) {
      res.status(401).json({ error:{msg:'Could not list'} });
    }
  },

  //-------------------------------------------------------
  save: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
      } 
      const { text } = req.body;
      const { postId } = req.params;

      const conectedUser = await Auth.decodeToken(req, res);
      const userId = conectedUser.id;

      const coment = await Coment.create({
        text,
        postId,
        userId,
      });
      const post = await Post.findByPk(postId, { attributes: ['userId'] });
      await Notification.create({ categoryId: 3, userId, receiverId: post.userId, elementId: postId  });
      res.status(200).json({ coment });
    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t save comment'} });
    }
  },

  //-------------------------------------------------------
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const conectedUser = await Auth.decodeToken(req, res);
      const userId = conectedUser.id;

      const coment = await Coment.destroy({
        where: {
          id, userId
        },
      });
      res.status(200).json({ coment });
    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t delete this comment'} });
    }
  },

  //-------------------------------------------------------
  edit: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
      } 
      const { id } = req.params;
      const { text } = req.body;

      const conectedUser = await Auth.decodeToken(req, res);
      const userId = conectedUser.id;

      const coment = await Coment.update(
        { text },
        {
          where: {
            id, userId
          },
        }
      );
      res.status(200).json({ coment });
    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t edit this comment'} });
    }
  },

  //-------------------------------------------------------
};
