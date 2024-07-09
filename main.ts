import * as fs from 'fs';
import { keygen } from './keygen';
import { airdrop } from './airdrop';
import { callProgram } from './call_program';

async function main() {
    const walletPath = './wallet.json';

    if (!fs.existsSync(walletPath)) {
        console.log('Wallet not found. Generating new wallet...');
        await keygen();
    }

    console.log('Requesting airdrop...');
    const airdropResult = await airdrop();

    if (airdropResult === '429 Too Many Requests') {
        console.log('Skipping airdrop due to rate limiting. Proceeding to call the program...');
    }

    console.log('Calling program...');
    await callProgram();
}

main().catch(console.error);
