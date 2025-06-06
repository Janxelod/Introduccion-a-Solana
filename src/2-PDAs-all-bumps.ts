import { PublicKey } from "@solana/web3.js";

export const CallExample2_5 = () => {
  console.log(
    `===== Example 2-5 : Program Derived Addresses (PDAs) with all bumps =====`
  );

  const programId = new PublicKey("11111111111111111111111111111111");
  const optionalSeed = "helloWorld";

  // Loop through all bump seeds (255 down to 0)
  for (let bump = 255; bump >= 0; bump--) {
    try {
      const PDA = PublicKey.createProgramAddressSync(
        [Buffer.from(optionalSeed), Buffer.from([bump])],
        programId
      );
      console.log("bump " + bump + ": " + PDA);
    } catch (error) {
      console.log("bump " + bump + ": " + error);
    }
  }
  console.log(`\n`);
};
