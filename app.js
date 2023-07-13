const express = require("express");
const app = express();

// 앱 세팅
app.set("views", "./views"); //화면 뷰를 관리해줄 파일이 저장될 폴더를 두번째 파라미터로 ./views
app.set("view engine", "ejs"); //html코드 해석할 엔진을 ejs로 사용.

app.get("/", (req, res) => {
    res.render("home/index");
});
app.get("/login", (req, res) => {
    res.render("home/login");
});

app.listen(3000, () => {
    console.log("서버 가동");
});