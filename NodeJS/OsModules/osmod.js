const os = require("os");

console.log(os.arch());

const freeMemor = os.freemem();
console.log(`${freeMemor / 1024 / 1024 / 1024}`);

const totalMemor = os.totalmem();
console.log(`${totalMemor / 1024 / 1024 / 1024}`);
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());