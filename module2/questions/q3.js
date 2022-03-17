let fs = require("fs");
let path = require("path")

let DestPath = path.join(__dirname,"..","index.html");
let SourcePath = path.join(__dirname,"..","..","module1","index.html");


fs.copyFileSync(SourcePath,DestPath);