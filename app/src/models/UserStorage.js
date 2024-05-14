"use strict";

class UserStorage {
    static #users = {
        id: ["jjb1234", "김주영", "응애응애"],
        psword: ["1234", "영주김", "애응애응"],
        name: ["정비호", "김주영", "응애"],
    };

    static getUsers(...fields) {
        const users = this.#users; //7
        const newUsers = fields.reduce((newUsers, field) => { //8
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers; //9
        }, {});
        return newUsers; //10
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;    
        }, {});  
        return userInfo;
    }
}

module.exports = UserStorage;