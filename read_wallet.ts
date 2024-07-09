import fs from 'fs';

const walletData = JSON.parse(fs.readFileSync('wallet.json', 'utf8'));
const arrayData= new Uint8Array(walletData.secretKey);
console.log(arrayData);