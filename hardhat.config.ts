import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-network-helpers";
import "hardhat-deploy";
import "@nomiclabs/hardhat-solhint";
import "hardhat-deploy-ethers";

import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL! || "https://eth-rinkedby/example";
const SEPOLIA_PRIVATE_KEY1 = process.env.SEPOLIA_PRIVATE_KEY1! || "0xkey";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY! || "key";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key";

// const POLYGONSCAN_API_KEY =
//   process.env.POLYGONSCAN_API_KEY || "Your polygonscan API key";
const REPORT_GAS = process.env.REPORT_GAS || false;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: SEPOLIA_PRIVATE_KEY1 ? [SEPOLIA_PRIVATE_KEY1] : [],
      //   accounts: {
      //     mnemonic: MNEMONIC,
      //   },
      saveDeployments: true,
      chainId: 11155111,
    },
    // mainnet: {
    //   url: MAINNET_RPC_URL,
    //   accounts: SEPOLIA_PRIVATE_KEY1 ? [SEPOLIA_PRIVATE_KEY1] : [],
    //   //   accounts: {
    //   //     mnemonic: MNEMONIC,
    //   //   },
    //   saveDeployments: true,
    //   chainId: 1,
    // },
    // polygon: {
    //   url: POLYGON_MAINNET_RPC_URL,
    //   accounts: SEPOLIA_PRIVATE_KEY1 !== undefined ? [SEPOLIA_PRIVATE_KEY1] : [],
    //   saveDeployments: true,
    //   chainId: 137,
    // },
  },
  etherscan: {
    // npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      // polygon: POLYGONSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    player: {
      default: 1,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.8",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  mocha: {
    timeout: 200000, // 200 seconds max for running tests
  },
};

export default config;
