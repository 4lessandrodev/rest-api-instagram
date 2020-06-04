const { User } = require('../models');

module.exports = {
  save: async (req, res) => {
    try {
      const { email, ...dados } = req.body;
      const [result] = await User.findOrCreate({
        where: { email: email },
        defaults: { ...dados }
      });
      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error });
    }
  },

  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const { ...dados } = req.body;
      const result = await User.findByPk(id);
      if (!result) {
        return res.status(400).json({ err: 'Usuário não foi encontrado!' });
      }     
      result.update(dados);
      res.status(200).json({ result });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Usuario.findByPk(id);
      result.destroy();
      res.status(200).json({ result });
    } catch (error) {
      res.status(401).json({ error });
    }
  }
};