const path = require('path');//built-in oldugu icin -./yok

//mevcut dosyanin tam yolu:

console.log('_Filename:', __filename);

//mevcut dosyanin bulundugu klasör

console.log('_dirname',__dirname);

//yol birlestirme

const TamYol = path.join(__dirname, '../http', 'server.js');
console.log('join:', TamYol);

//dosya adi:
console.log("basename", path.basename(__filename));

//uzantisiz dosya adi:
console.log('uzantisiz basename', path.basename(__filename,'.js'));

//uzanti:
console.log('extname', path.extname(__filename));