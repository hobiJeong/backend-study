"use strict";

const express = require("express");
const router = express.Router(); //app이 아닌 router로 선언. express.Router()를 불러와줌.

const ctrl = require("./home.ctrl"); // home.ctrl에서 export 한 것을 ctrl로 받아줌.

router.get("/", ctrl.output.home); // ctrl의 home 함수를 콜백 login도 동일. 

<<<<<<< HEAD:routes/home/index.js

router.post("/post", ctrl.post);
=======
router.get("/login", ctrl.output.login);
>>>>>>> 622336f7662e287b4815d54dfaf7fa846f0b45a0:app/src/routes/home/index.js

router.post("/login", ctrl.process.login);

module.exports = router;