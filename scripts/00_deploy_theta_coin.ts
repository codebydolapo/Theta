import { ethers } from "hardhat";
import fs from "fs"

async function main() {
    const [owner] = await ethers.getSigners();
    const ThetaCoin = await ethers.getContractFactory("ThetaCoin");
    const thetaCoin = await ThetaCoin.deploy();

    await thetaCoin.deployed();

    console.log(`Theta Contract deployed to ${thetaCoin.address}`)
    fs.writeFileSync("src/thetacoinAddress.js", `export const thetacoinAddress = "${thetaCoin.address}"`)

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
