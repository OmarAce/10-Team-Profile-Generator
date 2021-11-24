//Imports the Employee CLass
const Employee = require("./Employee");

//Extends Employee class with Manager Specific Constructor options
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

//Manager Class Methods
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

//Available to be exported
module.exports = Manager;
