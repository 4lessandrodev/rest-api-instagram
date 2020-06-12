const { Follower, User } = require('./../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  // ------------------------------------------------------------------------------------------------
  saveOrDelete: async (req, res) => {
    try {
      let follow;
      const { userId } = req.params;

      //Substituir pelo id do usuário no token
      const followerId = await Math.ceil(Math.random() * 10);

      let result = await Follower.findOne({ where: { userId, followerId } });
      
      if (result == null) {
        follow = await Follower.create({ userId, followerId });
      } else {
        follow = await Follower.destroy({ where: result.dataValues });
      }

      res.status(200).json({ follow });

    } catch (error) {
      res.status(401).json({error});
    }
  },

  // ------------------------------------------------------------------------------------------------
  listfollowing: async (req, res) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);

      //Substituir pelo id do token
      const conectedUser = 1;

      const followed = await Follower.findAll({ where: { userId: conectedUser }, attributes: ['followerId'] });
      let followedIds = followed.map(user => JSON.parse(user.followerId));

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
      res.status(401).json({ error });
    }
  },

  // ------------------------------------------------------------------------------------------------
  listfollowers: async (req, res) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);

      //Substituir pelo id do token
      const conectedUser = 3;

      const followed = await Follower.findAll({ where: { followerId: conectedUser }, attributes: ['userId'] });
      let followedIds = followed.map(user => JSON.parse(user.userId));

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
      res.status(401).json({ error });
    }
  }

};