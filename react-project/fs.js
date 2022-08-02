const path = require('path');
const fs = require('fs');
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'afar guy', (error) => {
  if (error) throw error;
  console.log('file written');
});
