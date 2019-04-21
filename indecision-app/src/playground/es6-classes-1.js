//Convection UpperCase
//Setup construct to take name, age (default is 0 )
// getDescription - Andrew Mead is 26 year(s) old.  
class Person {
    constructor(name = 'Anonymous',age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` I'm currently doing ${this.major}`;
        }
        return description;
    }
}

//Create Traveler -> Person
//Add support for homeLocation
//Override getGreeting()
// 1.
class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()){
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Thiago Cunha Montenegro',22, 'Computer Science');
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());
const other = new Student('Rayla Sá', 22);
console.log(other);
console.log(other.getDescription());
console.log(other.hasMajor());
const defaultPerson = new Person();
console.log(defaultPerson)

const t = new Traveler('Rob','56','Paulistana');
console.log(t,t.getGreeting());

const a = new Traveler(undefined,undefined,'NowHere');
console.log(a.getGreeting());