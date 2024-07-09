import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import fs from 'fs';

export async function airdrop() {
    try {
        // Read the wallet JSON file
        const walletData = JSON.parse(fs.readFileSync('wallet.json', 'utf8'));
        const keypair = Keypair.fromSecretKey(new Uint8Array(walletData.secretKey));
        const connection = new Connection("https://api.devnet.solana.com", "confirmed");
        const txhash = await connection.requestAirdrop(keypair.publicKey, 1 * LAMPORTS_PER_SOL);
        console.log("https://explorer.solana.com/tx/" + txhash + "?cluster=devnet");
    } catch (error) {
        if (error instanceof Error && error.message.includes('429 Too Many Requests')) {
            console.error('Airdrop error: Server responded with 429 Too Many Requests.');
            return '429 Too Many Requests';
        } else {
            console.error('An unexpected error occurred:', error);
            throw error;
        }
    }
}
