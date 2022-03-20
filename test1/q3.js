const array =  [
    { name: "Boston", rainfall: [1, 2, 3, 4, 5, 6, 7] },
    { name: "Chandler", rainfall: [0, 0, 1, 0, 0, 1, 1] },
    { name: "Charlotte", rainfall: [2, 2, 2, 2, 2, 2, 2] },
    { name: "Dallas", rainfall: [3, 3, 2, 6, 1, 3, 8] },
];

    rainDance(array); //calling function
    
    
    //rainDance function
    function rainDance(array){
        const result = [];
        //looping around the cities
        for(let i=0; i<array.length; i++){
            let avg=0,sum=0;
            //looping around rainfall values of a city
            for(let j=0; j<array[i].rainfall.length; j++){
                sum = sum+(array[i].rainfall[j]);
            }
            //calculating average for a city
            avg=sum/(array[i].rainfall.length);
            //creating new object of each city
            let temp = {
                name: array[i].name,
                avgRainfall: avg
            };
            //adding temp obj to resultant array
            result.push(temp);
            
        }
        
        return(result);
    }