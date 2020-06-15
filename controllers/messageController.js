const { Message, User, Notification } = require('./../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { validationResult } = require('express-validator');
const Auth = require('./../middleware/Auth');

module.exports = {  
  // ------------------------------------------------------------------------------------------------
  save: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
      } 
      const { text } = req.body;
      const { receiverId } = req.params;
      
      const conectedUser = await Auth.decodeToken(req, res);
      const userId = conectedUser.id;
      
      const message = await Message.create({ text, receiverId, userId });
      await Notification.create({ categoryId: 2, userId, receiverId, elementId: message.id });
      res.status(200).json({ message });
      
    } catch (error) {
      res.status(401).json({ error });
    }  
  },
  
  // ------------------------------------------------------------------------------------------------
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      
      const conectedUser = await Auth.decodeToken(req, res);
      const userId = conectedUser.id;

      const message = await Message.destroy({ where: { id, userId } });
      res.status(200).json({ message });
    } catch (error) {
      res.status(401).json({error});
    }
  },
  
  // ------------------------------------------------------------------------------------------------
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

      const message = await Message.update({ text }, { where: { id, userId } });
      res.status(200).json({ message });
    } catch (error) {
      res.status(401).json({ error });
    }
  },
  
  // ------------------------------------------------------------------------------------------------
  list: async (req, res) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);

      const conectedUser = await Auth.decodeToken(req, res);
      const userId = conectedUser.id;
      const { receiverId } = req.params;
      
      const { count:size, rows:messages } = await Message.findAndCountAll({
        where: {
          userId: { [Op.in]: [userId, receiverId] },
          receiverId: { [Op.in]: [userId, receiverId] }
        },
        include: [{ model: User, as:'user_sent', required:true, attributes: ['id', 'name', 'avatar']}],
        limit,
        offset: limit * page
      });
      
      res.status(200).json({ size, messages });
      
    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t list messages'} });
    }  
  }
};