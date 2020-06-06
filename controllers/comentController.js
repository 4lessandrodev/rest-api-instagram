const { Coment } = require('../models');
const sequelize = require('sequelize');

module.exports = {
    // -------------------------------------
    list: async (req, res, next) => {

        const { limit = 5 } = req.query
        const { postId } = req.params

        try {

            const coments = Coment.findAndCountAll({
                    where: { postId },
                    limit: limit,
                    offset: 5
                })
            
            res.status(200).json(coments)


        } catch(error) {
            console.log(error)
        }

    }

    // -------------------------------------
}