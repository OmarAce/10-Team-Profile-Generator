//Imports the Employee CLass
const Employee = require("./Employee");

//Extends Employee class with Engineer Specific Constructor options
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

//Engineer Class Methods
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

//Available to be exported
module.exports = Engineer;
