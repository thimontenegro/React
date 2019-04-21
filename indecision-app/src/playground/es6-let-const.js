var nameVar = 'Thiago';
console.log('nameVar', nameVar)
nameVar = 'Rayla';
console.log('nameVar',nameVar);

let nameLet = 'Jen';
console.log('nameLet',nameLet)
nameLet = 'Thiago';
console.log('nameLet',nameLet);

const nameConst = 'Frank';
console.log("nameConst",nameConst);


// Block Scoping
function getPetName(){
    var petName = 'Hal';
    return petName;
}

console.log(getPetName())

const fullName = 'Thiago Cunha';
let firstName;
if(fullName){
     firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

