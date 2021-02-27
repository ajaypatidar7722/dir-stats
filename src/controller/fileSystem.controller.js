const FileSystemService = require("../services/fileSystem.service");

const fileSystemController = {
  stats: async (req, res) => {
    try {
      const { path, page = 1, count = 10 } = req.query;
      const startFrom = (page - 1) * count;
      const upTo = (page * count) - 1;

      const { files, total } = await FileSystemService.stats(path, startFrom, upTo);

      res.status(200).send({ data: { files, total } });
    } catch(error) {
      const errorMessage = 'Filed to get file attributes';
      console.error(errorMessage, error);
      res.status(500).send({ error, errorMessage });
    }
  },
};

module.exports = fileSystemController;
