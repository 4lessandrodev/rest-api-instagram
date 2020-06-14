const { Post, Coment, User, Follower } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { check, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

module.exports = {
    // ------------------------------------------------------------------------------------------------
    save: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ error: errors.array() });
            } 
            //conected user
            const userId = 1;
            const { text } = req.body;
            const { files } = req;
            if (!files) {
                return res.status(422).json({ error: {msg:'Image is required'} });
            }
            const image = path.join(process.env.PROTOCOL, process.env.DOMAIN, process.env.IMAGES_FOLDER,
                process.env.POST_FOLDER_UPLOAD, files[0].filename);

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
    
    // ------------------------------------------------------------------------------------------------
    list: async (req, res) => {
        try {
            let { limit = 10, page = 1 } = req.query;
            limit = parseInt(limit);
            page = parseInt(page - 1);
            
            //Substituir pelo id do token
            const conectedUser = 1;
            
            const users = await Follower.findAll({ where: { userId: conectedUser }, attributes:['followerId']});
            const followers = users.map(user => JSON.parse(user.followerId));

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
                where: { userId: { [Op.in]: [...followers, conectedUser] } },
                limit,
                offset: limit * page
            });
                
            res.status(200).json({ size, posts });
            
        } catch (error) {
            res.status(401).json({ error });
        }
    },
        
    // ------------------------------------------------------------------------------------------------
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
            
    // ------------------------------------------------------------------------------------------------
    edit: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ error: errors.array() });
            } 
            const { id } = req.params;
            const { text } = req.body;
            const { files } = req;
            let image;
            
            //Usuário conectado
            const userId = 1;
            const exists = await Post.findByPk(id, { attributes: ['image'] });
            if (exists == null) {
                return res.status(404).json({ error: { message: 'Post not exists' } });
            }
            if (fileS[0]) {
                fs.unlinkSync(exists.image);
                image = path.join(process.env.PROTOCOL, process.env.DOMAIN, process.env.IMAGES_FOLDER,
                    process.env.POST_FOLDER_UPLOAD, files[0].filename);
            }
            const post = await Post.update(
                { text, image }, {
                    where: id, userId
            });
            res.status(200).json({ post });
        } catch (error) {
            res.status(401).json({ error });
        }
    },
                
    // ------------------------------------------------------------------------------------------------
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            //Usuário conectado
            const userId = 1;

            const post = await Post.destroy({
                where: { id, userId }
            });
            res.status(200).json({ post });
        } catch (error) {
            console.log(error);
            res.status(401).json({ error });
        }
    },
};
            