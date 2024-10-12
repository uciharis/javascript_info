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