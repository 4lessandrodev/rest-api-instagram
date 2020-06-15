'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE TRIGGER update_n_likes_plus AFTER INSERT ON likes FOR EACH ROW
      BEGIN
        UPDATE posts SET n_likes = n_likes + 1
        WHERE posts.id = NEW.postId;
      END
      `
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP TRIGGER update_n_likes_plus`);
  }
};
