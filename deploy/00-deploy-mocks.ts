import { ethers, network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { developmentChains } from "../helper-hardhat-config";

const BASE_FEE = ethers.parseEther("0.25"); // 0.25 is the premuim. It cost
const GAS_PRICE_LINK = 1e9;

const deployFunc: DeployFunction = async ({
  getNamedAccounts,
  deployments,
}) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const args = [BASE_FEE, GAS_PRICE_LINK];
  if (developmentChains.includes(network.name)) {
    console.log(`dev chain: ${network.name}`);
    log("Local network detected! Deploying mocks");
    await deploy("VRFCoordinatorV2Mock", {
      from: deployer,
      log: true,
      args,
    });
    log("Mocks Deployed!");
    log("__________________________");
  }
};

export const tags = ["all", "mocks"];
export default deployFunc;
