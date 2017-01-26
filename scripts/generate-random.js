const testFolder = './katas/';
const fs = require('fs');
const _ = require('lodash');
let random = Math.random();

fs.readdir(testFolder, (err, files) => {
    files = _.shuffle(files);
    let index = Math.floor(random * files.length)
    let file = files[index];

    fs.createReadStream(testFolder + file).pipe(fs.createWriteStream('KATA.md'));

    console.log('Selected ' + file);
    console.log('Kata generated, check KATA.md for instructions');
});
