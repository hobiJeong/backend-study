"use strict";

const express = require("express");
const router = express.Router(); //app이 아닌 router로 선언. express.Router()를 불러와줌.

router.get("/", (req, res) => {
    res.render("home/index");
}); // render를 통해 index.ejs를 루트경로에 들어 왔을때 띄워줌. login도 동일.

router.get("/login", (req, res) => {
    res.render("home/login");
});

module.exports = router;
