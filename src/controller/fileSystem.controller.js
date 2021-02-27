const FileSystemService = require("../services/fileSystem.service");

const fileSystemController = {
  stats: async (req, res) => {
    try {
      const { path } = req.query;
      const files = await FileSystemService.stats(path);
      res.status(200).send({ data: { files } });
    } catch(error) {
      const errorMessage = 'Filed to get file attributes';
      console.error(errorMessage, error);
      res.status(500).send({ error, errorMessage });
    }
  },
};

module.exports = fileSystemController;
