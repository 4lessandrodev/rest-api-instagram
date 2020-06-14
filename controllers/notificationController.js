const { Notification, NotificationCategory, User } = require('./../models');
module.exports = {
  // ------------------------------------------------------------------------------------------------
  list: async (req, res) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);
      const conectedUser = 6;
      const { count:size, rows:notifications } = await Notification.findAndCountAll({
        where: {
          receiverId:conectedUser
        },
        attributes: ['id', 'read','elementId'],
        include: [
          {
            model: NotificationCategory,
            as: 'category',
            required: true,
            attributes: ['text', 'endPoint']
          },
          {
            model: User,
            as: 'user_sent',
            required: true,
            attributes:['id', 'name', 'avatar']
          },
        ],
        limit,
        offset: limit * page
      });
      res.status(200).json({ size, notifications });
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
      const notification = await Notification.destroy({ where: { id, userId } });
      res.status(200).json({ notification });
    } catch (error) {
      res.status(401).json({ error });
    }
  },
  
  // ------------------------------------------------------------------------------------------------
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const { read } = req.body;
      //Usuário conectado
      let userId = 1;

      const notification = await Notification.update({ read }, { where: { id, userId } });
      res.status(200).json({notification});
    } catch (error) {
      res.status(401).json({ error });
    }
  }
  
};