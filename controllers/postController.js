const { Post, Coment, User, Follower } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { validationResult } = require('express-validator');
const path = require('path');
const Auth = require('./../middleware/Auth');
require('dotenv').config();
const StoreImage = require('./../middleware/StoreImage');

module.exports = {
    // ------------------------------------------------------------------------------------------------
    save: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ error: errors.array() });
            } 

            const conectedUser = await Auth.decodeToken(req, res);
            const userId = conectedUser.id;

            const { text } = req.body;
            const { files } = req;
            if (!files) {
                return res.status(422).json({ error: {msg:'Image is required'} });
            }
            const image = path.join(process.env.PROTOCOL, process.env.DOMAIN + ':' + process.env.PORT, process.env.IMAGES_FOLDER,
                process.env.POST_FOLDER_UPLOAD, files[0].filename);

            const post = await Post.create({
                image,
                text,
                userId
            });
            res.status(200).json({ post });
        } catch (error) {
            console.log(error);
            res.status(401).json({ error:{msg:'couldn´t save post'} });
        }
    },
    
    // ------------------------------------------------------------------------------------------------
    list: async (req, res) => {
        try {
            let { limit = 10, page = 1 } = req.query;
            limit = parseInt(limit);
            page = parseInt(page - 1);
            
            const conectedUser = await Auth.decodeToken(req, res);
            const userId = conectedUser.id;
            
            const users = await Follower.findAll({ where: { userId }, attributes:['followerId']});
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
                where: { userId: { [Op.in]: [...followers, userId] } },
                limit,
                offset: limit * page
            });
                
            res.status(200).json({ size, posts });
            
        } catch (error) {
            res.status(401).json({ error:{msg:'Couldn´t list posts'} });
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
            res.status(401).json({ error:{msg:'Couldn´t find post'} });
        }
    },
            
    // ------------------------------------------------------------------------------------------------
    edit: async (req, res) => {
        try {

            const { id } = req.params;
            const { text } = req.body;
            const { files } = req;
            let image;
            
            const conectedUser = await Auth.decodeToken(req, res);
            const userId = conectedUser.id;

            const exists = await Post.findOne({ where: { id, userId }, attributes: ['image'] });
            if (!exists) {
                await StoreImage.deletePostImage(req);
                return res.status(422).json({ error: { message: 'Post not exists' } });
            }

            await StoreImage.deleteOldPostImage(exists.image);

            image = path.join(process.env.PROTOCOL, process.env.DOMAIN + ':' + process.env.PORT, process.env.IMAGES_FOLDER,
                process.env.POST_FOLDER_UPLOAD, files[0].filename);
            
            const post = await Post.update(
                { text, image }, {
                    where: { id, userId }
            });
            res.status(200).json({ post });
        } catch (error) {
            await StoreImage.deletePostImage(req);
            res.status(401).json({ error:{msg:'Couldn´t edit post'} });
        }
    },
                
    // ------------------------------------------------------------------------------------------------
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const conectedUser = await Auth.decodeToken(req, res);
            const userId = conectedUser.id;

            const exists = await Post.findOne({ where: { id, userId }, attributes: ['image'] });
            if (!exists) {
                return res.status(422).json({ error: { message: 'Post not exists' } });
            }

            await StoreImage.deleteOldPostImage(exists.image);


            const post = await Post.destroy({
                where: { id, userId }
            });
            res.status(200).json({ post });
        } catch (error) {
            res.status(401).json({ error:{msg:'Couldn´t delete this post'} });
        }
    },
};
            