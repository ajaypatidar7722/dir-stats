

const fileSystemTypes = `
  scalar Date

  type Attribute {
    dev: Int
    mode: Int
    nlink: Int
    uid: Int
    gid: Int
    rdev: Int
    blksize: Int
    ino: Int
    size: Int
    blocks: Int
    atimeMs: Float
    mtimeMs: Float
    ctimeMs: Float
    birthtimeMs: Float
    atime: Date
    mtime: Date
    ctime: Date
    birthtime: Date
  }

  type FileRecord {
    extName: String
    fileName: String
    absolutePath: String
    attributes: Attribute
  }

  type FileStats {
    files: [FileRecord]
    total: Int
  }
`;

module.exports = fileSystemTypes;
