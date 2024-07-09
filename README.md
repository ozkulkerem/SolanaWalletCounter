# Solana Counter Program

Bu proje, Solana blok zinciri üzerinde bir sayaç programı çalıştırmak için hazırlanmıştır. Aşağıda, projenin nasıl çalıştığını ve her bir dosyanın ne yaptığını açıklayan bilgileri bulabilirsiniz.

## Gereksinimler

- Node.js ve npm kurulu olmalıdır.
- `@solana/web3.js`, `@project-serum/anchor` ve `fs` kütüphanelerine ihtiyaç vardır.

## Dosyalar ve Açıklamaları

### `main.ts`

Projenin ana dosyasıdır ve diğer modülleri çağırarak programın çalışmasını sağlar. Bu dosya, cüzdan oluşturur, airdrop talep eder ve sayaç programını çağırır.

### `keygen.ts`

Yeni bir Solana cüzdanı oluşturur ve bu cüzdanın bilgilerini `wallet.json` dosyasına kaydeder.

```typescript
import { Keypair } from "@solana/web3.js";
import fs from "fs";

export async function keygen() {
  const kp = Keypair.generate();
  console.log("my public key base58: " + kp.publicKey.toBase58());
  console.log("my secret key: " + kp.secretKey);

  const wallet = {
    secretKey: Array.from(kp.secretKey),
    publicKey: kp.publicKey.toBase58(),
  };

  fs.writeFileSync("wallet.json", JSON.stringify(wallet, null, 2));
  console.log(
    "Secret key integer array olarak wallet.json dosyasına kaydedildi."
  );
}
```
