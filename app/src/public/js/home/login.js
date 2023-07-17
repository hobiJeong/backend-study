"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

function login() {
    const req = {
        id : id.value,
        psword : psword.value,
    };
}