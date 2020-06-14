const fs = require('fs');
const path = require('path');
require('dotenv').config();

module.exports = {
  delete: (req) => {
    let { files } = req;
    if (files[0]) {
      const imagePath = path.join('public', process.env.IMAGES_FOLDER, process.env.AVATAR_FOLDER_UPLOAD, files[0].filename);
      let existImage = fs.existsSync(imagePath);
      if (existImage) {
        fs.unlinkSync(imagePath);
      }
    }
  }
};