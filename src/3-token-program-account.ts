import { Connection, PublicKey } from "@solana/web3.js";

export const CallExample3 = async () => {
  console.log(`===== Example 3: Fetching Token Program Account Info =====`);
  const connection = new Connection(
    "https://api.mainnet-beta.solana.com",
    "confirmed"
  );

  const programId = new PublicKey(
    "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
  );

  const accountInfo = await connection.getAccountInfo(programId);
  console.log(
    JSON.stringify(
      accountInfo,
      (key, value) => {
        if (key === "data" && value && value.length > 1) {
          return [
            value[0],
            "...truncated, total bytes: " + value.length + "...",
            value[value.length - 1],
          ];
        }
        return value;
      },
      2
    )
  );
  console.log(`\n`);
};
