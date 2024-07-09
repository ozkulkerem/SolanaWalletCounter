import { Keypair } from "@solana/web3.js";
import fs from 'fs';
export async function keygen() {
    // Generate a new keypair
    const kp = Keypair.generate();

    // Log the public key and secret key
    console.log("my public key base58: " + kp.publicKey.toBase58());
    console.log("my secret key: " + kp.secretKey);

    // Create a wallet object with the public and secret keys
    const wallet = {
        secretKey: Array.from(kp.secretKey), // Convert to array to save as JSON
        publicKey: kp.publicKey.toBase58()
    };

    // Write the wallet object to a JSON file
    fs.writeFileSync('wallet.json', JSON.stringify(wallet, null, 2));

    console.log('Secret key integer array olarak wallet.json dosyasına kaydedildi.');
}