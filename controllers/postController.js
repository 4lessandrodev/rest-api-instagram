const { Posts } = require('../models');
const sequelize = require('sequelize');

module.exports = {
    //-----------------------------------
    save: async (req, res) => {
        const { image, text, userId } = req.body
        try {

            const post = Posts.create({
                image,
                text,
                userId
            })

            res.status(200).json({ post })

        } catch (error) {
            res.status(401).json({ error })
        }
    }

    //-----------------------------------
}