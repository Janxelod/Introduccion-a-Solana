import { Keypair } from "@solana/web3.js";

export const CallExample1 = () => {
  console.log(`===== Example 1: Public and Private Key Generation =====`);
  const keypair = Keypair.generate();
  console.log(`Public Key: ${keypair.publicKey}`);
  console.log(`Secret Key: ${keypair.secretKey}`);
  console.log(`\n`);
};
