const { Like, Notification, Post } = require('../models');

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
                let post = await Post.findByPk(postId, { attributes: ['userId'] });
                like = await Like.create({ userId, postId });
                await Notification.create({ categoryId: 1, userId, receiverId: post.userId, elementId: postId });
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