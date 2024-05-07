"use strict";

const home = (_req, res) => {
    res.render("home/index");
};

const login = (_req, res) => {
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