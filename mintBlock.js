// mintBlock.js
// Usage: node mintBlock.js
// Requires: npm install ethers dotenv

require("dotenv").config();

const { ethers } = require("ethers");

// Load env vars
const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

async function mintBlock() {
  try {
    const tx = {
      to: await wallet.getAddress(),
      value: ethers.parseEther("0.00001"),
      gasLimit: 21000,
    };
    const sentTx = await wallet.sendTransaction(tx);
    console.log(`Sent tx: ${sentTx.hash}`);
    await sentTx.wait();
  } catch (err) {
    console.error("Error sending tx:", err);
  }
}

console.log("Minting (sending tx) every 10 seconds...");
setInterval(mintBlock, 10000);
