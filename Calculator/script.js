let numberZero = document.querySelector("#zero");
let numberOne = document.querySelector("#one");
let numberTwo = document.querySelector("#two");
let numberThree = document.querySelector("#three");
let numberFour = document.querySelector("#four");
let numberFive = document.querySelector("#five");
let numberSix = document.querySelector("#six");
let numberSeven = document.querySelector("#seven");
let numberEight = document.querySelector("#eight");
let numberNine = document.querySelector("#nine");

let screen = document.querySelector('.screen');

function show0() {
    screen.value += 0
}

function show1() {
    screen.value += 1
}
function show2() {
    screen.value += 2
}

function show3() {
    screen.value += 3
}

function show4() {
    screen.value += 4
}

function show5() {
    screen.value += 5
}

function show6() {
    screen.value += 6
}

function show7() {
    screen.value += 7
}

function show8() {
    screen.value += 8
}

function show9() {
    screen.value += 9
}

function clear() {
    screen.value = "";
}