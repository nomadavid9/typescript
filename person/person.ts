class Person{
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean = true;
    
    constructor(firstName, lastName, age, isAlive){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAlive = isAlive;
    }
}

let david = new Person("David", 'Arias', 26, true);
console.log(david);