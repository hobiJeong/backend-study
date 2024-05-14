"use strict";

const home = (_req, res) => {
    res.render("home/index");
};

const login = (_req, res) => {
    res.render("home/login");
};

const post = (req, _res) => {}

module.exports = {
    home,
    login,
    post,
}