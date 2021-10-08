const fs = require('fs');
//callfuncn has to be called in asynch
fs.writeFile('read.txt', "today is awesome day",
    (err) => {
        console.log("file is created");
    }
);
fs.readFile('read.txt', 'utf-8', (err, data) => {
    console.log(data);
});
