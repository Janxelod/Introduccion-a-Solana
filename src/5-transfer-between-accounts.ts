import {
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
  Keypair,
  Connection,
} from "@solana/web3.js";

export const CallExample5 = async () => {
  console.log(`===== Example 5: Transfer Between Accounts =====`);

  const connection = new Connection("http://localhost:8899", "confirmed");

  const sender = new Keypair();
  const receiver = new Keypair();

  console.log(`Sender Public Key: ${sender.publicKey}`);
  console.log(`Receiver Public Key: ${receiver.publicKey}`);
  console.log(`\n`);

  const signature = await connection.requestAirdrop(
    sender.publicKey,
    LAMPORTS_PER_SOL
  );
  await connection.confirmTransaction(signature, "confirmed");

  const preBalance1 = await connection.getBalance(sender.publicKey);
  const preBalance2 = await connection.getBalance(receiver.publicKey);

  const transferInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver.publicKey,
    lamports: 0.01 * LAMPORTS_PER_SOL,
  });

  const transaction = new Transaction().add(transferInstruction);

  const transactionSignature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [sender]
  );

  const postBalance1 = await connection.getBalance(sender.publicKey);
  const postBalance2 = await connection.getBalance(receiver.publicKey);

  console.log("Sender prebalance:", preBalance1 / LAMPORTS_PER_SOL);
  console.log("Recipient prebalance:", preBalance2 / LAMPORTS_PER_SOL);
  console.log("Sender postbalance:", postBalance1 / LAMPORTS_PER_SOL);
  console.log("Recipient postbalance:", postBalance2 / LAMPORTS_PER_SOL);
  console.log("Transaction Signature:", transactionSignature);
  console.log(`\n`);
};
