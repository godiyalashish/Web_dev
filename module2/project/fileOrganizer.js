let fs = require("fs");
let path = require("path");
let folderPath  = process.argv[2];
let folderExists = fs.existsSync(folderPath);
let extenstions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc", ".xlsx", ".pdf"],
    Image:[".jpg", ".jpeg", ".png",".gif"],
    Software:[".exe"]
};

if(folderPath){
    // console.log("path is valid");
    let files = fs.readdirSync(folderPath);
    for(let i=0; i<files.length; i++){
        let ext = path.extname(files[i])
        let folderName = giveFolderName(ext);
        let pathOfFolder = path.join(folderPath,folderName);
        let exists = fs.existsSync(pathOfFolder);
        if(exists){
            moveFile(folderPath,pathOfFolder,files[i]);
        }else{
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath,pathOfFolder,files[i]);
        }
    }
}else{
    console.log("path not valid");
}

function giveFolderName(ext){
    for(let key in extenstions){
        let extArr = extenstions[key];
        for(let i=0; i<extArr.length; i++){
            if(ext ==extArr[i]){
                return key;
            }      
        }
    }
    return 'Other';
    
}

function moveFile(folderPath, pathOfFolder, fileName){
    let source = path.join(folderPath, fileName);
    let destination = path.join(pathOfFolder, fileName);
    fs.copyFileSync(source,destination);
    fs.unlinkSync(source);

}