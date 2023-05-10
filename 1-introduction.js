// Apa itu Javascript ?

/* Javascript atau selanjutnya disingkat js,  diciptakan untuk membuat " halaman web yang hidup".
program dalam bahasa ini disebut script. JS dapat ditulis di halaman web HTML dan berjalan secara otomatis
begitu halaman di-loads.

script dieksekusi sebagai plain teks, script tidak butuh persiapan khusus maupun kompile untuk berjalan.

JS dapat dijalankan tidak hanya di browser, tetapi juga di server atau bahkan device lain yang punya spesial program
bernama javascript engine.

browser yang punya engine tertanam biasa disebut JS virtual machine.

engine yang berbeda punya codename yang berbeda, seperti :

- V8, di chrome, opera atau edge
- spidermonkey, di firefox
dan lain sebagainya seperti chakra, nitro, squirrelfish dll.

*/


// Bagaimana mesin tsb bekerja ?

/* mesin tentu rumit. namun secara dasarnya seperti berikut:
- engine membaca ("parse") script
- mesin "compiles" script ke machine code
- machine code bekerja membaca 
 */


// Apa yang DAPAT JS di-browser lakukan ?

/* JS modern adalah bahasa pemrograman yang "safe". JS tidak menyediakan akses low level ke memori atau cpu,
karena hal tsb sudah diatur di dalam browser shg kita tidak perlu lagi melakukannya.

kemampuan JS bergantung pada lingkungan dia bekerja. misalnya node.js mendukung fungsi yang mengijinkan JS
dengan kewenangan utk membaca atau menulis file, melakukan request jaringan dsb.

JS dalam browser, dapat melakukan apapun terkait manipulasi halaman web, interaksi dg user, dan webserver.

sehingga, JS dalam broser dapat melakukan :
- menambah HTML baru ke dalam halaman, mengganti konten yang ada, memodif style
- menanggapi aksi user, bereaksi pada klik mouse, gerakan ponter dan tombol yang ditekan
- mengirim permintaan jaringan ke server luar, download dan upload file (disebut AJAX dan COMET teknologi)
- mendapat dan men-set cookies, bertanya pada visitor, menunjukkan pesan
- mengingat data di sisi klien (local storage)

*/

// Apa yang TIDAK DAPAT js di-browser lakukan ?

/* kemampuan JS di browser dibatasi utk melindungi keamanan user. tujuannya utk mencegah evil webpage
mengakses informasi pribadi atau merugikan data user.

contoh dari batasan tsb adalah :

- JS di dalam halaman web tidak dapat membaca/ menulis di hard disk, meng-copy atau eksekusi program, dan
JS di-browser tidak punya akses langsung ke fungsi OS.
browser modern mengijinkan utk bekerja dengan files namun aksesnya terbatas dan hanya tersedia jika user menyetujui,
seperti "dropping" files ke dalam jendela browser atau bekerja dengan file via <input> tag.

ada banyak cara utk berinteraksi dengan kamera/ mikropon dan di peralatan yang lain, tetapi hal tersebut
memerlukan ijin user yang jelas. sehingga halaman yg mengaktifkan js tidak boleh diam-diam mengaktifkan kamera, 
mengamati sekeliling atau mengirimkan info ke NSA.

- Tabs atau jendela yang berbeda secara umum tidak mengetahui satu sama lain. terkadang mereka tahu, sebagai contoh
ketika 1 jendela menggunakan JS utk membuka jendela yang lain. bahkan di kasus ini, JS dari 1 halaman tidak bisa
akses halaman lain jika mereka datang dari situs yang berbeda (dari domain berbeda, protokol atau port).

Hal ini disebut "Same Origin Policy" . Untuk menyiasatinya, kedua halaman harus setuju akan pertukarang data serta menggunakan
kode JS khusus yang menghandle hal tersebut. 

Keterbatasan ini sekali lagi, untuk keamanan user. sebuah halaman dari http://anysite.com tidak seharusnya dapat akses tab lain dari
https://gmail.com, sebagai contohnya dan menghindari pencurian data dari situ.

JS dapat secara mudah berkomunikasi lewat internet ke server dimana halaman saat ini berasal. tetapi kemampuan utk menerima data dari situs
ini dibatasi (dilumpuhkan). Walaupun memungkinkan, hal ini membutuhkan persetujuan yang jelas(tertulis di http header) dari tempat lain.
sekali lagi, ini adalah pembatasan untuk keamanan.

Keterbatasn ini tidak berlaku apabila digunakan diluar browser, contohnya pada server. Browser modern juga mengijinkan plugin/ ekstensi
yang mungkin meminta tambahan permission.
*/

// Apa yang Membuat Javascript unik ?

/* ada 3 hal hebat tentang JS :
- integrasi penuh dengan HTML/CSS
- hal yang simpel dilakukan dengan sederhana
- didukung oleh banyak browser besar dan diaktifkan secara default.

hanya Js lah teknologi browser yang mengkombinasi 3 hal tsb. Hal tsb yang membuat JS sangat unik. hal ini yang menyebabkan
JS menjadi alat yang populer untuk membuat tampilan browser. Selain itu, JS dapat digunakan utk membuat server, aplikasi mobile dll.
 */

// Bahasa "diluar" JS

/* sintaks JS tidak memenuhi kebutuhan semua orang. Orang yang berbeda menginginkan fitur yang berbeda.

Alat2 modern membuat transpilasi menjadi sangat cepat dan transparan, sehingga mengijinkan developer untuk membuat kode diluar bahasa dan
merubahnya secara otomatis. contoh bahasanya antara lain :
- coffescript adalah "gula sintak" untuk JS. coffescript mengenalkan sintak yang lebih singkat, untuk menulis lebih jelas dan tepat. developer
Ruby biasa menyukainya.
- typescript berkonsentrasi utk menambah "tipe data strict" untuk menyederhakanan pengembangan dan mendukung sistem yang komplek. Ts dikembangkan
oleh microsoft
- Flow juga menambahkan tipe data, namun dengan cara yang berbeda. Flow dikembangkan oleh Facebook
- Dart adalah bahasa tersendiri yang menggunakan engine-nya sendiri dan berjalan di lingkungan non-browser (seperti mobile apps) tetapi
dapat di transpile ke Js. dikembangkan oleh Google
- Brython adalah python transpiler ke Js yang memungkinkan menulis aplikasi di bahasa python murni tanpa JS
- kotlin adalah bahasa modern, ringkas dan aman yang dapat digunakan di browser ataun node.

*/

// Pedoman dan spesifikasi

/* https://www.ecma-international.org/publications/standards/ berisi informasi mendalam, detail dan formal tentang JS. RUjukan ini
mendefinisikan bahasa. Karena sangatlah formal, hal ini membuatnya sulit dimengerti. meskipun lengkap dan benar, tidak direkomendasikan
untuk penggunaan sehari-hari

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference adalah manual utama denga contoh dan informasi tambahan.
sangat cocok untuk membaca ini baik dari segi fungsi, method dll.

Untuk melihat dukungan antar browser serta engine lain, cek :
- https://caniuse.com/ berisi tabel dukungan per fitur
- https://kangax.github.io/compat-table berisi table dengan fitur bahasa dan engine yang didukung atau tidak.
*/

// Developer Console

/* Kode itu rentan akan kesalahan. 
Di browser, user secara default tidak bisa melihat error. jadi jika kode berisi kesalahan, kita tidak akan melihat apa yang salah dan
tidak dapat memperbaikinya.

developer biasanya menggunakan chrome atau firefox untuk pengembangan karena browser tersebut punya alat pengembang terbaik. 

( devtools - introduction - google chrome )
 */