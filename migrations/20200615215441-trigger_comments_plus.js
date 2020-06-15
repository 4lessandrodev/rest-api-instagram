'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE TRIGGER update_n_comment_plus AFTER INSERT ON coments FOR EACH ROW
      BEGIN
        UPDATE posts SET n_coments = n_coments + 1
        WHERE posts.id = NEW.postId;
      END
      `
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP TRIGGER update_n_comment_plus`);
  }
};
