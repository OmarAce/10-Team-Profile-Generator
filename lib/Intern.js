//Imports the Employee CLass
const Employee = require("./Employee");

//Extends Employee class with Intern Specific Constructor options
class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email);
        this.school = school;
    }

//Intern Class Methods
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

//Available to be exported
module.exports = Intern;
