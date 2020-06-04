const User = require('../models/User');


module.exports = {
    save: async (req, res) => {
        try {
            let { email, password, name, avatar} = req.body;
            const result = await User.create({
                email, password, name, avatar
            });
            res.status(200).json({ result });
        } catch(error) {
            res.status(401).json({ error });
        }
    },
}