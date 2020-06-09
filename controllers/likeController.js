const { Like } = require('../models');

module.exports = {
    save: async (req, res) => {
        try {
            const { postId } = req.params
            const userId = 1
            
            const like = await Like.findOne({
                where: {
                    userId, postId
                }
            })
            let result
            if(like){
                result = await Like.create({ userId, postId })
            }
            else {
                result = await Like.destroy({
                    where: {
                        userId, postId
                    }
                }) 
            }
            res.status(200).json({ result })

        } catch (error) {
            res.status(401).json({ error })
        }
    }
}