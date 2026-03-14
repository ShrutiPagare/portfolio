const fs = require('fs');

const radixB64 = fs.readFileSync('radix_temp.b64', 'utf8').trim();
fs.writeFileSync('public/images/radix.png', Buffer.from(radixB64, 'base64'));

const solidxB64 = fs.readFileSync('solidx_temp.b64', 'utf8').trim();
fs.writeFileSync('public/images/Solidx.png', Buffer.from(solidxB64, 'base64'));

fs.unlinkSync('radix_temp.b64');
fs.unlinkSync('solidx_temp.b64');
console.log('Images saved successfully');
