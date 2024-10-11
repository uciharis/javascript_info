'use strict'
// Task 1

let admin, name;
name = "John";
admin = name;
console.log(admin);

// Task 2

const BIRTHDAY = '1990-12-17';
const AGE = someCode(BIRTHDAY);
console.log(AGE);

function someCode(value){
    let KONVERTER = 1000*60*60*24*365;
    let tanggal = new Date(value).getTime();
    let today = new Date().getTime();
    let age = (today-tanggal)/KONVERTER;
    return Math.floor(age);
}
