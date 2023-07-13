"use strict";

const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home"); // home이라는 경로의 index.js 파일을 읽어줌.

// 앱 세팅
app.set("views", "./views"); //화면 뷰를 관리해줄 파일이 저장될 폴더를 두번째 파라미터로 ./views
app.set("view engine", "ejs"); //html코드 해석할 엔진을 ejs로 사용.

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드. 루트 경로로 들어오면 home으로 이동.

app.listen(3000, () => {
    console.log("서버 가동");
});