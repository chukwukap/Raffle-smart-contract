import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import { ethers, network } from "hardhat";
import { VRFCoordinatorV2Mock } from "../typechain-types";
import verify from "../utils/verify";

const VRF_SUB_FUND_AMOUNT = ethers.parseEther("0.2");
// const VRF_SUB_FUND_AMOUNT = "1000000000000000000000";

const deployFunc: DeployFunction = async ({
  getNamedAccounts,
  deployments,
}: HardhatRuntimeEnvironment) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId!;
  let vrfCoordinatorV2Address, subscriptionId;
  if (developmentChains.includes(network.name)) {
    const VRFCoordinatorV2Mock: VRFCoordinatorV2Mock = await ethers.getContract(
      "VRFCoordinatorV2Mock",
    );
    // Creating subscription programmatically.
    vrfCoordinatorV2Address = await VRFCoordinatorV2Mock.getAddress();
    const transactionResponse = await VRFCoordinatorV2Mock.createSubscription();
    const transactionReceipt = await transactionResponse.wait(1);
    console.log(transactionReceipt?.logs);
    // @ts-expect-error
    subscriptionId = transactionReceipt?.logs[0].args[0];
    // console.log(subscriptionId);
    // fund the subscription
    // usually, you'd need the link token on a real network
    await VRFCoordinatorV2Mock.fundSubscription(
      subscriptionId,
      VRF_SUB_FUND_AMOUNT,
    );
  } else {
    vrfCoordinatorV2Address = networkConfig[chainId]["vrfCoordinatorV2"];
    subscriptionId = BigInt(networkConfig[chainId]["subscriptionId"]);
  }
  const entranceFee = networkConfig[chainId]["entranceFee"];
  const gasLane = networkConfig[chainId]["gasLane"];
  const callbackGasLimit = networkConfig[chainId]["callbackGasLimit"];
  const interval = networkConfig[chainId]["interval"];
  const args = [
    vrfCoordinatorV2Address,
    entranceFee,
    gasLane,
    subscriptionId,
    callbackGasLimit,
    interval,
  ];

  const raffle = await deploy("Raffle", {
    from: deployer,
    args,
    log: true,
    waitConfirmations: 1,
  });
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("Verifying...");
    await verify(raffle.address, args);
  }

  log("__________________________________");
};

export const tags = ["all", "raffle"];
export default deployFunc;
