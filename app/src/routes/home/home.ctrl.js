"use strcit";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        const user = new User(req.body); // 1
        const response = user.login(); // 4 , 13
        console.log(response);
        return res.json(response); // 14
        
    },
};
 

module.exports = {
    output,
    process,
}