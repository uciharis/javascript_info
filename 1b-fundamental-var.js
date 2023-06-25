"use strict";

// variable is such like a storage
// declare first (let) and change value without redeclare
let tong = 300;
tong = 400; // True
// let tong = 399; // false bcoz redeclare tong

// var adalah keyword sama dg let
// var adalah bentuk old

// variable naming

// a. hanya berisi huruf, angka atau simbol $ dan _
// b. first char gaboleh angka
// c. pake camelCase. semua kata diawali kapital kcuali kata pertama
// example: let userNames; let tes123;
// d. sensitive-case
let $ = 100;
console.log($);

let _ = 120;
console.log(_);

// asignment using reserved words
// let let = 30;

// numm = 5; // able not asignment using let in old time, but unable if used in strict mode
// console.log(numm); //referenceError

const alpha =30;
// alpha = 22;
console.log(alpha); //typeError assignment to constant var is error

// make constan name with all capital letter
const COLOR_RED = "#f00";
let colorku= COLOR_RED;
console.log(colorku);

// you cant re-declare a constant
const KONST = 19.35;
// KONST = 20; redeclaring is forbidden for const
console.log(KONST);