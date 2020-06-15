const { Follower, User, Notification } = require('./../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Auth = require('./../middleware/Auth');

module.exports = {
  // ------------------------------------------------------------------------------------------------
  saveOrDelete: async (req, res) => {
    try {
      let follow;
      const { userId } = req.params;

      const conectedUser = await Auth.decodeToken(req, res);
      const followerId = conectedUser.id;

      const result = await Follower.findOne({ where: { userId, followerId } });
      
      if (result == null) {
        follow = await Follower.create({ userId, followerId });
        await Notification.create({ categoryId: 4, userId: followerId, receiverId: userId, elementId: follow.id });
      } else {
        follow = await Follower.destroy({ where: result.dataValues });
      }

      res.status(200).json({ follow });

    } catch (error) {
      res.status(401).json({error:{msg:'Couldn´t complete the operation'}});
    }
  },

  // ------------------------------------------------------------------------------------------------
  listfollowing: async (req, res) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);

      const conectedUser = await Auth.decodeToken(req, res);
      const userId = conectedUser.id;

      const followed = await Follower.findAll({ where: { userId }, attributes: ['followerId'] });
      const followedIds = followed.map(user => JSON.parse(user.followerId));

      const { count:size, rows:users } = await User.findAndCountAll({
        where: {
          id: {
            [Op.in]: [...followedIds]
          }
        },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
        limit,
        offset: limit * page
      });

      res.status(200).json({ size, users });

    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t list following'} });
    }
  },

  // ------------------------------------------------------------------------------------------------
  listfollowers: async (req, res) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);

      const conectedUser = await Auth.decodeToken(req, res);
      const followerId = conectedUser.id;

      const followed = await Follower.findAll({ where: { followerId }, attributes: ['userId'] });
      const followedIds = followed.map(user => JSON.parse(user.userId));

      const { count: size, rows: users } = await User.findAndCountAll({
        where: {
          id: {
            [Op.in]: [...followedIds]
          }
        },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
        limit,
        offset: limit * page
      });

      res.status(200).json({ size, users });

    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t list followers'} });
    }
  },

  // ------------------------------------------------------------------------------------------------
  find: async (req, res) => {
    try {
      const { id } = req.params;

      const users  = await User.findByPk(id,{
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
      });

      res.status(200).json({ users });

    } catch (error) {
      res.status(401).json({ error:{msg:'Couldn´t find follower'} });
    }
  }

};