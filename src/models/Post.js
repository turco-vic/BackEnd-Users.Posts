const { v4: uuid4 } = require('uuid');
class User {
    constructor(idUser, like, comment, description, image) {
        this.id = uuid4();
        this.idUser = idUser;
        this.like = like;
        this.comment = comment;
        this.description = description;
        this.image = image;
    }
}

module.exports = User;
