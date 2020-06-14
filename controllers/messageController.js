const { Message, User, Notification } = require('./../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {  
  // ------------------------------------------------------------------------------------------------
  save: async (req, res) => {
    try {
      const { text, receiverId } = req.body;
      
      //trocar pelo id do uauário logado token
      const conectedUser = 1;
      
      const message = await Message.create({ text, receiverId, userId: conectedUser });
      await Notification.create({ categoryId: 2, userId: conectedUser, receiverId, elementId: message.id });
      res.status(200).json({ message });
      
    } catch (error) {
      res.status(401).json({ error });
    }  
  },
  
  // ------------------------------------------------------------------------------------------------
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      //Usuário conectado
      let userId = 1;

      const message = Message.destroy({ where: { id, userId } });
      res.status(200).json({ message });
    } catch (error) {
      res.status(401).json({error});
    }
  },
  
  // ------------------------------------------------------------------------------------------------
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const { text } = req.body;
      const message = await Message.update({ text }, { where: { id } });
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

      //trocar pelo id do uauário logado token
      const conectedUser = 1;
      const { receiverId } = req.params;
      
      let { count:size, rows:messages } = await Message.findAndCountAll({
        where: {
          userId: { [Op.in]: [conectedUser, receiverId] },
          receiverId: { [Op.in]: [conectedUser, receiverId] }
        },
        include: [{ model: User, as:'user_sent', required:true, attributes: ['id', 'name', 'avatar']}],
        limit,
        offset: limit * page
      });
      
      res.status(200).json({ size, messages });
      
    } catch (error) {
      console.log(error);
      res.status(401).json({ error });
    }  
  }
};