const { Notification, NotificationCategory, User } = require('./../models');
const Auth = require('./../middleware/Auth');

module.exports = {
  // ------------------------------------------------------------------------------------------------
  list: async (req, res) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);

      const conectedUser = await Auth.decodeToken(req, res);
      const receiverId = conectedUser.id;

      const { count:size, rows:notifications } = await Notification.findAndCountAll({
        where: {
          receiverId
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
      res.status(401).json({ error:{msg:'Couldn´t list notifications'} });
    }
  },
  
  // ------------------------------------------------------------------------------------------------
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const conectedUser = await Auth.decodeToken(req, res);
      const receiverId = conectedUser.id;

      const notification = await Notification.destroy({ where: { id, receiverId } });
      res.status(200).json({ notification });
    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t delete notification'} });
    }
  },
  
  // ------------------------------------------------------------------------------------------------
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const { read } = req.body;

      const conectedUser = await Auth.decodeToken(req, res);
      const receiverId = conectedUser.id;

      const notification = await Notification.update({ read }, { where: { id, receiverId } });
      res.status(200).json({notification});
    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t edit notification'} });
    }
  }
  
};