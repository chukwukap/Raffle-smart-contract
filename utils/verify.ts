import { run } from "hardhat";

const verify = async (contractAddress: string, args: string[]) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(`***error${e}`);
    }
  }
};

export default verify;
