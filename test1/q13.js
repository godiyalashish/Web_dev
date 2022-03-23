let users = [ { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, orders: [{ id: 1, name: "GOT Book Series" }], }, { name: "Bhavesh", age: 37, address: { local: "48 DT Row", city: "Hyderabad", state: "AP", }, }, { name: "Jasbir", age: 38, address: { local: "196 Lama Bhavan", city: "Gangtok", state: "Sikkim", }, orders: [ { id: 1, name: "Chair" }, { id: 2, name: "PS5" }, ], }, ];

function updateUsers(users, userObject, item) { //write your code here
    var userName = userObject.name, userAlreadyExists=0, userIndex=0;

    for(var i=0; i<users.length; i++){
        if(users[i].name == userName){
            userAlreadyExists = 1;
            userIndex =i;
            break;
        }
    }
    if(userAlreadyExists ==1){
        if(userObject[userIndex].hasOwnProperty('orders'))
    }

}

console.log( JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "GOT Book Series" ) ) );

console.log( JSON.stringify( updateUsers(users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }) ) );

console.log( JSON.stringify( updateUsers( users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }, "Chair" ) ) );

console.log( JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "Fan" ) ) );