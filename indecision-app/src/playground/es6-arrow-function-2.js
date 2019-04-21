//Arguments object - no longer bound

const add = (a, b) => {
  //  console.log(arguments);
    return a + b;
};

console.log(add(55,1));


// this keyword - no longer bound
const user = {
    name:  'Thiago',
    cities: ['CG','JP'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

//Challenge Area
const multiplier = {
    //array of numbers
    numbers:[1,2,3,4,5,6,7,8,9,10],
    // multiplyBy - single number
    multiplyBy: 5,
    //multiply - return a new array with the number has been multiplied
    multiply() {
        return this.numbers.map((multiplied) => this.multiplyBy * multiplied);
    }
};

console.log(multiplier.multiply());