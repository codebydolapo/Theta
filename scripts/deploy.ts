import { ethers } from "hardhat";
// const Minter = "../artifacts/contracts/Minter.sol/Minter.json"
// const metadata = "../metadata"
import fs from "fs"

async function main() {
    const [owner, customer] = await ethers.getSigners();
    const Solaris = await ethers.getContractFactory("Solaris");
    const solaris = await Solaris.deploy(owner.address);

    await solaris.deployed();

    fs.writeFileSync("src/solarisAddress.js", `export const solarisAddress = "${solaris.address}"`)

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
