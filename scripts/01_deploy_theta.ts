import { ethers } from "hardhat";
import fs from "fs"
import {thetacoinAddress} from '../src/thetacoinAddress'

async function main() {
    const [owner, customer] = await ethers.getSigners();
    const Theta = await ethers.getContractFactory("Theta");
    const theta = await Theta.deploy(thetacoinAddress, thetacoinAddress);

    await theta.deployed();

    console.log(`Theta Contract deployed to ${theta.address}`)
    fs.writeFileSync("src/thetaAddress.js", `export const thetaAddress = "${theta.address}"`)

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
