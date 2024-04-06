"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

const post = (req, res) => {
    console.log(req);
}

module.exports = {
    home,
    login,
    post,
}