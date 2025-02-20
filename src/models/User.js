const { v4: uuid4 } = require('uuid');
class User {
    constructor(name, email, age) {
        this.id = uuid4();
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

module.exports = User;
