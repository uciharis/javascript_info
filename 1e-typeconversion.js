// Type conversion

// sepanjang waktu, operator dan fungsi melakukan konversi nilai secara otomatis 
// yang diinputkan ke mereka menjadi nilai yang sesuai
// contoh: alert akan konversi nilai apapun menjadi string agar bs ditampilkan di layar

// konversi String
// dipakai ketika kita ingin bentuk string
let values = true;
console.log('tipe values-before:', typeof values);
// mari diubah ke string
values = String(values);
console.log('tipe values-after:', typeof values);

// ----------------------------------------- //

// konversi Numeric
// konversi ini otomatis disaat operasi math.
//contoh operasi math ke non-numbers

console.log('4'/'2'); // amazing wak baru tau wkwkw. kaco ni JS

// untk eksplisit convert bisa pake fungsi Number()
let stringAngka = '123';
let stringToAngka = Number(stringAngka);
console.log(stringAngka,'tipe: ',typeof stringAngka);
console.log(stringToAngka,'tipe: ',typeof stringToAngka);
console.log('konversi undefined: ', Number(undefined));

// konversi diperlukan terutama jika nilai tsb berasal dari form teks
// yang diinputkan adalah string, sedangkan kita mengharapkan nilai itu adalah number
// maka perlu dikonversi

// jika kita konversi string yang bukan angka valid, hasilnya adalah NaN
let teks = 'jokonto';
let teksToNumber = Number(teks);
console.log(teksToNumber);

// konversi rules: 
// undefined -> NaN
// null -> 0
// true false -> 1 0
// '' -> 0
console.log(Number('')); // output: 0

// ----------------------------------------- //

// konversi boolean

// konversi rules :
// value kosong, 0, '',null, undefined,NaN -> false
// sisanya - > true

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean('halo'))
console.log(Boolean(''));

// ----------------------------------------- //