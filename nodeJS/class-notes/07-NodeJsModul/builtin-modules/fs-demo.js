const fs = require("fs");
const path = require('path');

//--DOSYA YAZMA---

// ASYNC (asenkron) - callback ile

// fs.writeFile(
//      path.join(__dirname, "test-async.txt"),
//      "Bu async ile yazildi",
//      (err) => {
//          if (err) throw err;
//          console.log('dosya async ile yazildi kalp');
//      }
// )

// SYNC  (senkron) - islem bitne kadar bekler, sonra devam eder

// fs.writeFileSync(
//     path.join(__dirname, "test.txt"),
//     "Merhaba Node.JS!\nBu dosyayi node yazdi",
//     "utf-8",
// );
// console.log('Dosya yazildi');

// Sync okuma

// const icerik = fs.readFileSync(
//     path.join(__dirname, 'test.txt'),
//     'utf-8');

// console.log('dosya icerigi', icerik);

// //Async okuma

// fs.readFile(
//   path.join(__dirname, 'test-async.txt'),
//   'utf-8',
//   function (hata, içerik) {
//     if (hata) {
//       console.log('Okuma hatası:', hata.message);
//     }
//     console.log('☼ Async okunan:\n', içerik);
//   },
// );

//!Dosya YOLU var mi kontrol:

// const dosyaYolu = path.join(__dirname, 'test.txt');

// if(fs.existsSync(dosyaYolu)){
//     console.log('Dosya Var');

//     //Mevcut dosyaya ekleme yapma
//     fs.appendFileSync(dosyaYolu, '\nYeni satir eklendi');
//     console.log('Dosya Güncellendi');

// }else{
//     console.log('Dosya yok');
// }

//! Klasör Olusturma

const klasörYolu = path.join(__dirname, 'yeni-klasör')

