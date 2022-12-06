import { ethers } from "hardhat";
// const Minter = "../artifacts/contracts/Minter.sol/Minter.json"
const metadata = "../metadata"
import fs from "fs"
// import "../src/contractInformation"

async function main() {
    const [owner, customer] = await ethers.getSigners();
    const Minter = await ethers.getContractFactory("Minter");
    const minter = await Minter.deploy();

    await minter.deployed();

    const Marketplace = await ethers.getContractFactory("Marketplace");
    const marketplace = await Marketplace.deploy(minter.address, owner.address);

    await marketplace.deployed();
    console.log(`Minter delivered to Marketplace at ${marketplace.address}`);

    // fs.writeFileSync("src/MinterAddress.txt", Minter.address)
    fs.writeFileSync("src/minterAddress.js", `export const nftAddress = "${minter.address}"`)
    fs.writeFileSync("src/marketplaceAddress.js", `export const marketplaceAddress = "${marketplace.address}"`)
    

    for(let i=0; i<13; i++){
        let mintedMinter = await minter.mint(`../metadata/item${i}.json`, marketplace.address);
        console.log(`Minter minted with hash ${mintedMinter.hash}`)
    }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
