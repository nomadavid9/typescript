var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, isAlive) {
        this.isAlive = true;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAlive = isAlive;
    }
    return Person;
}());
var david = new Person("David", 'Arias', 26, true);
console.log(david);
