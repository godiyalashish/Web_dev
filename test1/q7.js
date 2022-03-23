var num = 3672;

console.log(decToBin(num));

function decToBin(num){
    let arr = [];
    while(num!=0){
      let rem = num%2;
      arr.unshift(rem);
      num = parseInt(num/2)
    }
    return arr.join('');
}