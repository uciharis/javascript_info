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

// Task 3 : data type
let nama = 'jokontowl';
// alert(`helo ${1}`); // gak work running di terminal karna alert itu fungsi di browser
// output : helo 1 // harus run di browser lewat console atau diembed ke html

// alert(`helo ${'nama'}`);
// output : helo nama

// alert(`helo ${nama}`);
// output : halo jokontowl


// task 4 : interaksi
/*

let yourName = prompt('What is your name :');
confirm(yourName);

*/