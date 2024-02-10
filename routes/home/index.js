"use strict";

const express = require("express");
const router = express.Router(); //app이 아닌 router로 선언. express.Router()를 불러와줌.

const ctrl = require("./home.ctrl"); // home.ctrl에서 export 한 것을 ctrl로 받아줌.

router.get("/", ctrl.home); // ctrl의 hello 함수를 콜백 login도 동일. 


router.post("/post", ctrl.post);

router.get("/login", ctrl.login);

module.exports = router;