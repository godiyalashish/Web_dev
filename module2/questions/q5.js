//move a file

let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname,"fileToMove.txt");
let DestPath = path.join(__dirname,"newFolder","fileMovedHere.txt");

fs.copyFileSync(srcPath,DestPath);

fs.unlinkSync(srcPath);