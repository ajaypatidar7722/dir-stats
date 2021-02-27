const getPaginationProperties = require("../helpers/pagination");
const FileSystemService = require("../services/fileSystem.service");

const getStats = async (obj, { path, page, count }, context, info) => {
  if (page === 0 || count === 0) {
    throw new Error('`page` and `count` can not be 0');
  }

  const { startFrom, upTo } = getPaginationProperties(page, count);
  const { files, total } = await FileSystemService.stats(path, startFrom, upTo);
  return { files, total };
};

const fileSystemResolvers = {
  getStats,
};

module.exports = fileSystemResolvers;
