const fs = require('fs');
const path = require('path');
require('dotenv').config();

module.exports = {
  //-----------------------------------------------------------------------------------------------------------
  deleteUserAvatar: (req) => {
    let { files } = req;
    if (files[0]) {
      const imagePath = path.join('public', process.env.IMAGES_FOLDER, process.env.AVATAR_FOLDER_UPLOAD, files[0].filename);
      let existImage = fs.existsSync(imagePath);
      if (existImage) {
        fs.unlinkSync(imagePath);
      }
    }
  },

  //-----------------------------------------------------------------------------------------------------------
  deleteOldUserAvatar: (image) => {
    let filePath = path.parse(image);
    let fileName = filePath.base;
    let fullPath = path.join('public', process.env.IMAGES_FOLDER, process.env.AVATAR_FOLDER_UPLOAD, fileName);
    let existsImage = fs.existsSync(fullPath);
    if (existsImage) {
      fs.unlinkSync(fullPath);
    }
  },

  //-----------------------------------------------------------------------------------------------------------
  deletePostImage: (req) => {
    let { files } = req;
    if (files[0]) {
      const imagePath = path.join('public', process.env.IMAGES_FOLDER, process.env.POST_FOLDER_UPLOAD, files[0].filename);
      let existImage = fs.existsSync(imagePath);
      if (existImage) {
        fs.unlinkSync(imagePath);
      }
    }
  },

  //-----------------------------------------------------------------------------------------------------------
  deleteOldPostImage: (image) => {
    let filePath = path.parse(image);
    let fileName = filePath.base;
    let fullPath = path.join('public', process.env.IMAGES_FOLDER, process.env.POST_FOLDER_UPLOAD, fileName);
    let existsImage = fs.existsSync(fullPath);
    if (existsImage) {
      fs.unlinkSync(fullPath);
    }
  }
};