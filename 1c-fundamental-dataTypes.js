'use strict'
// 8 basic Data Type
// tipe data disebut 'primitive', karena nilainya hanya berisi 1 jenis
// tidak dengan object yang simpan data beragam

// a. number
let n = 123;
console.log(n);
// present both integer n floating
let infini = 1/0;
console.log(infini); // output : infinity

//NaN represent computational error and it is sticky no matter-
// what you do math operation
console.log("not number" / 2); // output : NaN
console.log('NaN + 1 =', NaN + 1);
console.log('pengecualian : NaN ** 0 =', NaN ** 0);

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - //


// b. BigInt

// when number cant represent values larger than 2^53 -1
// we need store larger
// check this anomaly :
let batasInt = (2**53)-1
console.log('batas int', batasInt);
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
console.log(9007199254740991 + 100); // 9007199254740992
// Output are the same, bcoz these reach the limit of storage
// we need to use BigInt by adding "n" to the end of integer
let angkaBigInt = 90071992547410929999n; 
console.log(angkaBigInt);

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - //


// c. String

let namaUser = "joekoe"; // double quotes
let namaOrang = 'koejoe'; // single quotes
console.log(namaUser, namaOrang); // double n single quotes have no difference in output console
console.log(`mereka adalah ${namaUser} dan ${namaOrang}`); // backtick for template literal
console.log(`contoh arithmetical expression ${300+99}`); // backtick bs diisi oprasi mat

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - //

// d. Boolean

// instance boolean true false
let isChecked = false;
console.log(isChecked);

// atau hasil komparasi
let isBesar = 4<1;
console.log('4 < 1 :', isBesar);


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - //

// e. null and undefined

// nilai null : refers to nothing,empty,unknown
let nilaiNull = null;
console.log(nilaiNull);

// nilai undefined : means value isnt assigned
// juga berlaku untuk variabel yang di-declare tapi tidak diberi nilai
let nilaiUndefined;
console.log(nilaiUndefined);
console.log(null == undefined); // wtf
console.log(null === undefined); //wtf

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - //

// f. object dan simbol

// dibahas soon


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - //

// g. tipe operator (typeof)
// sebuah operator yang mengembalikan tipe suatu operand.
console.log('tipe undefined :', typeof(undefined));
console.log('tipe 99 :', typeof(99));
console.log('tipe 10n :', typeof(10n));
console.log('tipe true :', typeof(true));
console.log('tipe \'halo\' :', typeof('halo'));
console.log('tipe Math :', typeof(Math)); // math adalah built-in objek utk operasi matematika
console.log('tipe null :', typeof(null)); // wtf null adalah object. ini anomali di JS utk kompatibilitas saja
console.log('tipe console:', typeof(console));
console.log('tipe alert:', typeof(alert));
console.log(typeof(alert));

// nb : typeof isnot a function but operator
// kita bs pakai typeof : typeof string
console.log(typeof 'hahay');
// dan juga typeof(string)

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - //
