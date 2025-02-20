class UserList {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    getAllUsers() {
        return this.users;
    }

    getUserById(id) {
        const user = this.users.find(user => user.id == id);
        if (!user) throw new Error("Usuário não encontrado");
        return user;
    }

    updateUser(id, updatedData) {
        const user = this.getUserById(id);
        Object.assign(user, updatedData);
        return user;
    }

    deleteUser(id) {
        this.users = this.users.filter(user => user.id != id);
    }
}

module.exports = UserList;
