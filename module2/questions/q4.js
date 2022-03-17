let fs = require("fs");
let path = require("path");

let folderPath = path.join(__dirname,"..","unorganised");

let content = fs.readdirSync(folderPath);

let extArray = [];

for(i=0; i<content.length; i++){
    let ext = content[i];
    extArray.push(path.extname(ext));
}

console.log(extArray);