
const fs = require('fs');
const path = require("path");
const util = require('util');

// promisifing conventional async funcitons.
const readDir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

/**
 * File System Service:
 * Here add all functions that requires to deal filesystem
 */
class FileSystemService {
  static stats = async (filePath, startFrom, upTo) => {
    let files = await readDir(filePath);
    const total = files.length;

    if (startFrom && upTo) {
      files = files.slice(startFrom, upTo);
    }

    const promises = files.map(async (file) => {
      // extracting key information about the file
      const extName = path.extname(file);
      const fileName = path.basename(file, extName);
      const absolutePath = path.resolve(file);

      // extracting attributes of the file
      const attributes = await stat(filePath, fileName);

      return {
        extName,
        fileName,
        absolutePath,
        attributes,
      };
    });

    const fileRecords = await Promise.all(promises);
    return {
      files: fileRecords,
      total,
    };
  }
};

module.exports = FileSystemService;
