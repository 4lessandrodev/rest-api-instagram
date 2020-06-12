const { Follower } = require('./../models');
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


};