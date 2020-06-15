'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE TRIGGER update_n_comment_less AFTER DELETE ON coments FOR EACH ROW
      BEGIN
        UPDATE posts SET n_coments = n_coments - 1
        WHERE posts.id = OLD.postId;
      END
      `
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP TRIGGER update_n_comment_less`);
  }
};
