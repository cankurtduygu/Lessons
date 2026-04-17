const os = require('os');

console.log('isletim sistemi:', os.platform());
console.log('isletim sistemi:', os.arch());
console.log('Toplam RAM:',
    (os.totalmem()/ 1024/1024/1024).toFixed(2),
    'GB',
);

console.log('Bos Ram:',(os.freemem() / 1024 /1024/1024).toFixed(2),'GB');

console.log('CPU:', os.cpus()[0].model);
console.log('Kullanici:', os.userInfo().username);
console.log('Home Dizin:', os.homedir());