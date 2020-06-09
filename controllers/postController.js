const { Post, Coment, User } = require('../models');
const sequelize = require('sequelize');

module.exports = {
    //-----------------------------------
    save: async (req, res) => {
        try {
            const { image, text, userId } = req.body;
            const post = await Post.create({
                image,
                text,
                userId
            });
            res.status(200).json({ post });
        } catch (error) {
            res.status(401).json({ error });
        }
    },
    
    //-----------------------------------
    list: async (req, res) => {
        try {
            let { limit = 10, page = 1 } = req.query;
            limit = parseInt(limit);
            page = parseInt(page - 1);
            const { count: size, rows: posts } = await Post.findAndCountAll({
                include: [
                    { model: User, as: 'user', attributes: ['id', 'name', 'avatar'] },
                    {
                        model: Coment, as: 'coments', attributes: ['id', 'text'],
                        include: [
                            {
                                model: User, as: 'user_coment', attributes: ['id', 'name', 'avatar']
                            }]
                    }
                ],
                attributes: { exclude: ['userId', 'createdAt', 'updatedAt'] },
                limit,
                offset: limit * page
            });
                
            res.status(200).json({ size, posts });
        } catch (error) {
            res.status(401).json({ error });
        }
    },
        
    // --------------------------------------------------
    findById: async (req, res) => {
        const { id } = req.params;
        try {
            const post = await Post.findByPk(id, {
                include: [
                    { model: User, as: 'user', attributes: ['id', 'name', 'avatar'] },
                    {
                        model: Coment, as: 'coments', attributes: ['id', 'text'],
                        include: [
                            {
                                model: User, as: 'user_coment', attributes: ['id', 'name', 'avatar']
                            }]
                    }
                ],
                attributes: { exclude: ['userId', 'createdAt', 'updatedAt'] }
            });
            
            res.status(200).json({ post });
        } catch (error) {
            res.status(401).json({ error });
        }
    },
            
    // --------------------------------------------------
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const { text } = req.body;
            const post = await Post.update(
                { text }, {
                where: id
            });
            res.status(200).json({ post }); 
        } catch (error) {
            res.status(401).json({ error });
        }
    },
            
    // --------------------------------------------------
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const post = await Post.destroy({
                where: { id }
            });
            res.status(200).json({ post });
        } catch (error) {
            console.log(error);
            res.status(401).json({ error });
        }
    }
};