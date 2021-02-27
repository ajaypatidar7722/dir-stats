const FileSystemService = require("../services/fileSystem.service");
const getPaginationProperties = require("../helpers/pagination");

const fileSystemController = {
  stats: async (req, res) => {
    try {
      const { path, page: pageValue = 1, count = 10 } = req.query;
      const page = parseInt(pageValue);
      if (page === 0 || count === 0) {
        throw new Error('`page` and `count` can not be 0');
      }
  
      const { startFrom, upTo } = getPaginationProperties(page, count);
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
