


let fs  = require("fs");
let path = require("path");

let arr = ['Audio','Video','Software','Documents','Applications','Others'];
let nameArr = ['abc', 'efg', 'xyz','def']
let extArr = ['.mp3','.mp4','.exe','.pdf','.apk','.rar'];

let organisePath = path.join(__dirname,"Orgainze");
if(!fs.existsSync(organisePath)){
    fs.mkdirSync(organisePath);
}

for(let i=0; i<arr.length;i++){
    let folderPath = path.join(organisePath,arr[i]);
    if(!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath);
    for(let j=0; j<nameArr.length; j++){
        let fileName = nameArr[j]+extArr[i];
        let filePath = path.join(folderPath,fileName);
        fs.writeFileSync(filePath,"");
    }
}