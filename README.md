# Sample Hardhat Project

# Raffle Contract User Guide

## Overview

Welcome to the Raffle Contract – a fun and transparent way to participate in random drawings and potentially become a lucky winner! This contract is implemented in Solidity, integrating with the Chainlink VRF (Version 2) for randomness, ensuring fairness in selecting winners.

## Getting Started

To interact with the Raffle Contract, you can view and participate in the ongoing raffles on the Ethereum blockchain. Here are the key details:

- **Contract Address:** [Insert Contract Address on Etherscan]
- **Chainlink VRF Coordinator:** [Insert VRF Coordinator Address on Etherscan]
- **Chainlink VRF Key Hash:** [Insert VRF Key Hash on Etherscan]

## Entering the Raffle

Participating in the raffle is straightforward. Follow these steps:

1. **Visit the Raffle Contract:** Navigate to the [Raffle Contract on Etherscan](Insert Contract Address on Etherscan).
2. **Connect Your Wallet:** Ensure your Ethereum wallet is connected to your preferred DApp browser or Ethereum-compatible wallet.
3. **Enter the Raffle:** Click on the 'Enter Raffle' button to pay the entrance fee and join the current raffle.

## How it Works

The Raffle Contract operates on a periodic schedule, selecting a random winner from the pool of participants. Here's a brief overview:

- **Interval:** Raffles run at specified intervals.
- **Entrance Fee:** To enter a raffle, participants must pay the required entrance fee.
- **Random Winner:** A Chainlink VRF call is made to select a random winner from the pool.

## Upkeep and Maintenance

The Raffle Contract uses Chainlink Keeper nodes for periodic upkeep. The contract ensures that maintenance is only performed when necessary and meets specific conditions.

## Monitoring and Results

Stay updated on the ongoing raffles, recent winners, and contract details:

- **Check Contract Status:** [Insert Contract Address on Etherscan]
- **View Recent Winners:** [Insert Contract Address on Etherscan]

## Frequently Asked Questions

### How often does the raffle occur?

The raffle occurs at regular intervals, as specified in the contract.

### Is the entrance fee refundable?

No, the entrance fee is non-refundable and contributes to the prize pool for the winner.

### How is the winner selected?

Winners are randomly selected using the Chainlink VRF, ensuring a fair and unbiased outcome.

## Explore Further

For a deeper understanding of the Raffle Contract and to explore contract details, visit the [Raffle Contract on Etherscan](Insert Contract Address on Etherscan).

Feel the excitement of the raffle and may the odds be ever in your favor! 🎉

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
