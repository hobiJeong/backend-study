"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {  //2
        this.body = body; //3
    }

    login() {
        const body = this.body;  //5
        const { id, psword } = UserStorage.getUserInfo(body.id); //6 , 11 (id psword값 UserStorage.js에서 받아옴)

        if (id) {
            if (id === body.id && psword === body.psword) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다. " }; //12
    }
}

module.exports = User;
