"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./src/routes/home"); // home이라는 경로의 index.js 파일을 읽어줌.

// 앱 세팅
app.set("views", "./src/views"); //화면 뷰를 관리해줄 파일이 저장될 폴더를 두번째 파라미터로 ./views
app.set("view engine", "ejs"); //html코드 해석할 엔진을 ejs로 사용.
app.use(express.static(__dirname+'/src/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함 될 경우 제대로 인식되지 않는 문제 해결

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드. 루트 경로로 들어오면 home으로 이동.

module.exports = app;
