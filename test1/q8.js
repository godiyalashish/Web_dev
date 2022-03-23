let string = "horse riding";
console.log(spoon(string));

function spoon(str){
    let result = '';//new string
    var i = str.indexOf(' ');//finding index of space in string
    for(var j=0;j<str.length;j++){ //looping through string
        if(j==0){
            result = result+str[i+1]
        }else if(j == i+1){
            result = result+str[0];
        }else{
        result = result+str[j];
        }
    }
    return result;
}