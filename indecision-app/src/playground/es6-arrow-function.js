const square = function (x) {
    return x * x;
}
/*
const squareArrow = (x) => {
    return x * x;
};
*/

const squareArrow = (x) => x * x;


console.log(square(2));
console.log(squareArrow(2));

/*Challenge time! */
/* Use arrow functions
getFirstName = fullName.split(' ')[0];
getFirstName('Mike ugsfh') ->'Mike'
Create regular arrow function
create arrow function usging shorthand syntax
 */
const getFirstName = (fullName) => fullName.split(' ')[0];

const getFirstName2 = function(fullName)  {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Rayla Sá'));
console.log(getFirstName2('Rayla Sá'));