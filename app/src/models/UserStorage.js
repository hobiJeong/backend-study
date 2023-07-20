"use strict";

class UserStorage {
    static #users = {
        id: ["jjb1234", "김주영", "응애응애"],
        psword: ["1234", "영주김", "애응애응"],
        name: ["정비호", "김주영", "응애"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
                console.log(field);
            }
            return newUsers;
        }, {});
        console.log(newUsers);
        return newUsers;
    }
}

module.exports = UserStorage;