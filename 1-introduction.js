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


// Apa yang dapat JS di browser lakukan ?

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