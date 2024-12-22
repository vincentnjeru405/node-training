const path = require('path')

console.log(path.sep);
//filePath

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

//basePath

const base = path.basename(filePath);
console.log(base);

//resolve
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

