const { Like } = require('../models');

module.exports = {
    saveOrDelete: async (req, res) => {
        try {
            let like;
            const { postId } = req.params;
            //Substituir pelo id do usuário no token
            const userId = await Math.ceil(Math.random() * 10);
            
            let result = await Like.findOne({
                where: { userId, postId }
            });

            
            if (result == null) {
                like = await Like.create({ userId, postId });
            }
            else {
                like = await Like.destroy({ where:result.dataValues });
            }

            res.status(200).json({ like });

        } catch (error) {
            res.status(401).json({ error });
        }
    }
};