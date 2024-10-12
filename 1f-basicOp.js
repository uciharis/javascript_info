// Dasar operator matematik

// Istilah unary, binary,operand

// operand : objek yang dikenai operasi matematik
// contoh : 2+3
// 2 & 3 adalah operand, + adalah operator
// operand alias argumen

// remainder % (sisa bagi)
// di javascript, % bukan persen melainkan operator sisa bagi
// contoh :
console.log(5%2); // 5/2 = 2 sisa 1 maka jawabannya: 1
console.log(8%3); // output :2

// exponential * (pangkat)
// berlaku juga untuk pangkat pecahan atau akar pangkat
console.log('akar pangkat 4: ', 4**(1/2))

// ------------------------- //

// String concatenation dg binary +

//contoh :
let s = 'my' + 'string';
console.log(s); // output : mystring
// nb : jika salah satu operand adalah string, maka operand lain dikonversi jd string
console.log(1 + '9'); // output : 19
console.log('1' + 9); // output : 19

// jika operator '+' berusaha membuat operand menjadi string
// tidak halnya dengan operator yang lain, seperti '-'

console.log(6-'1'); // output: 5
console.log('4'/'2'); // output: 2

// ------------------------- //

// unary +

// unary + bisa konvert sesuatu jadi angka
console.log(+true); // output : 1
console.log(+''); // output : 0
// kyk fungsi Number (wah shorthand nich)
// hal ini bs dipakai untuk konvert string jadi number
// kebanyakan hasil dari inputan form HTML defaultnya adalah string
let nilai1 = '2';
let nilai2 = '8';
console.log(+nilai1 + +nilai2); // output: 10 (sesuai keinginan kita)
console.log(Number(nilai1) + Number(nilai2)); // output: 10 (versi panjang dari unary +)

// ------------------------- //

// Prioritas operator

/*
(urutan teratas s.d terbawah)

[ unary +, unary - ]
[ ** ]
[ *, / ]
[ +, - ]
 
*/

// ------------------------- //

// chaining assignment

// kita dapat melakukan assignment secara berantai
// contoh :
let a,b,c;
a=b=c= 99;
console.log(a,b,c);

// untuk keterbacaan kode, sbaiknya displit menjadi :
let d = 212;
a = d;
b = d;
c = d;
console.log(a,b,c,d);

// ------------------------- //


// modif var ( timpa var)
// contoh :
let timpa = 39;
timpa = timpa + 69;
console.log(timpa); // kita ingin mengubah variabel tanpa menambah variabel baru (modif var yg exist)
// misal kita buat var baru dan copy dari timpa
let tambal = timpa;
tambal += 690; // penulisan ini sama dengan tambal = tambal + 690
console.log(tambal);
// contoh lain :
tambal -= 600;
console.log(tambal);
tambal *= 0.01;
console.log(tambal);

// ------------------------- //

// increment/ decrement

// ++ increase by 1
// -- decrease by 1
let counter = 4;
counter ++;
console.log(counter); // output : 5
counter --;
console.log(counter); // output : 4

// nb : increment dan decrement hanya berlaku utk variabel, tidak utk value
// nb : postfix form -> counter++
// nb : prefix form -> ++counter
// bedanya terlihat pada contoh berikut 

// prefix
let ticker = 1;
let kicker = 1;
let x = ++ticker;
console.log('nilai pre-fix', x); // nilai x terupdate +1 menjadi 2
let y = kicker++;
console.log('nilai post-fix', y); // nilai y masih 1, justru kickernya yang 1+1
console.log('nilai kicker', kicker); 