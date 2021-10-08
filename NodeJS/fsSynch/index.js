const fs = require('fs');
// fs.mkdirSync('firstdir');
fs.writeFileSync('firstDir/bio.txt', "Hello World"); //if exists it is overriden
fs.appendFileSync('firstDir/bio.txt', ' Have a good day');

// const data = fs.readFileSync('firstDir/bio.txt');
//we get raw buffer data here

//encode file

//UTF-8 >> character encoding capable of encoding all possible characters in unicode
// const data = fs.readFileSync('firstDir/bio.txt', 'utf-8');
// console.log(data);

fs.renameSync('firstDir/bio.txt', 'firstDir/myFile.txt')
fs.unlinkSync('firstDir/myFile.txt');
//deletes file
fs.rmdirSync("firstDir");
 //deleted dir


