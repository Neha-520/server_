const path = require("path");
console.log(path.dirname('C:/Users/Dell/Documents/GitHub/Node/PathModule/path.js'));
console.log(path.extname('C:/Users/Dell/Documents/GitHub/Node/PathModule/path.js'));
console.log(path.basename('C:/Users/Dell/Documents/GitHub/Node/PathModule/path.js'));

//return an object with properties of file
console.log(path.parse('C:/Users/Dell/Documents/GitHub/Node/PathModule/path.js'));

const myPath = path.parse('C:/Users/Dell/Documents/GitHub/Node/PathModule/path.js');
console.log(myPath.name);