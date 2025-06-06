import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const CallExample4 = async () => {
  console.log(`===== Example 4: Fetching Account Info =====`);
  const keypair = Keypair.generate();
  console.log(`Public Key: ${keypair.publicKey}`);

  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  // Funding an address with SOL automatically creates an account
  const signature = await connection.requestAirdrop(
    keypair.publicKey,
    LAMPORTS_PER_SOL
  );
  await connection.confirmTransaction(signature, "confirmed");

  const accountInfo = await connection.getAccountInfo(keypair.publicKey);
  console.log(JSON.stringify(accountInfo, null, 2));
  console.log(`\n`);
};
