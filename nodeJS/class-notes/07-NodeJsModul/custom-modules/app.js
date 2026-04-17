// const matematik = require("./matematik")

// console.log(matematik.topla(10,5));
// console.log(matematik.cikar(10,5));
// console.log(matematik.carp(10,5));
// console.log(matematik.böl(10,5));

//? require() bir obje döndürür → { topla: fn, cikar: fn, carp: fn, böl: fn }
//? Destructuring ile sadece istediğimiz fonksiyonları çekeriz
//? matematik.topla() yerine direkt topla() yazabiliriz
// const { topla, böl } = require('./matematik');

// console.log(topla(8, 4));

const kullanici = require("./kullanici")

console.log(kullanici.selamVer("Akin"));
