var fs =require('fs')
// console.log(fs)
var k =fs.readFileSync(process.argv[2]).toString().split('\n').length;
console.log(--k);