const fs = require('fs');
const path = require("path");
const util = require('util');

const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);


const generateTestFiles = async (filePath) => {
  console.log('generating array of 100000 records...');
  const array = (new Array(10000)).fill(1);

  console.time('Generate_Files');

  const testDirPath = path.join(filePath, 'testDir');
  if (!fs.existsSync(testDirPath)) {
    await mkdir(testDirPath);
  }

  for (i = 0; i < 10; i++) {
    console.log('Processing batch: ', i + 1);
    const promises = array.map((_, index) => {
      const tempFilePath = path.join(testDirPath, `${index}_${Date.now().toString()}.txt`);
      return writeFile(tempFilePath, `File number ${index}.`);
    });
  
    await Promise.all(promises);
  }

  return;
};

generateTestFiles(__dirname)
  .then(() => {
    console.timeEnd('Generate_Files');
    console.log('Execution finished');
  })
  .catch(console.error)
  .finally(() => process.exit(0));
