import { PublicKey } from "@solana/web3.js";

export const CallExample2 = () => {
  console.log(`===== Example 2 : Program Derived Addresses (PDAs) =====`);

  const programAddress = new PublicKey("11111111111111111111111111111111");
  const seeds = [Buffer.from("helloWorld")];
  const [pda, bump] = PublicKey.findProgramAddressSync(seeds, programAddress);

  console.log(`PDA: ${pda}`);
  console.log(`Bump: ${bump}`);
  console.log(`\n`);
};
