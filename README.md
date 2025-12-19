# AVAX Subnet Block Miner Script

This Node.js script sends a simple transaction every 3 seconds to a provided Avalanche subnet testnet. This encourages a new block to be minted every 3 seconds.

## Setup

1. Install dependencies:
   ```
   npm install ethers dotenv
   ```

2. Edit the `.env` file to set your `PRIVATE_KEY` and `RPC_URL`.

3. Run the script:
   ```
   node mintBlock.js
   ```

## How it works
- Sends a very small self-transaction every 3 seconds.
- Useful for forcing block production on your AVAX subnet/testnet.

*For testnet/development only. Do not use in production.*
