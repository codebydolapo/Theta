import { expect } from "chai";
import { ethers } from "hardhat";


describe("Marketplace", async function () {

    function etherToWei(_etherAmount: any) {
        return ethers.utils.parseUnits(_etherAmount, "ether")
    }

    let deployedMarketplace: any,
        deployedMinter: any, owner: any, customer: any, transaction: any;
    let IPFSUri = "../metadata/item1.json"

    before(async () => {
        [owner, customer] = await ethers.getSigners();

        const Room = await ethers.getContractFactory("Minter");
        deployedMinter = await Room.deploy();

        const Receptionist = await ethers.getContractFactory("Marketplace");
        deployedMarketplace = await Receptionist.deploy(deployedMinter.address, owner.address);
        transaction = await deployedMinter.mint(IPFSUri, deployedMarketplace.address)
        await transaction.wait()
    })

    it("Checks the total supply", async () => {
        let totalSupply = await deployedMarketplace.getTotalSupply()
        console.log(`The total supply of the NFTs minted is ${totalSupply.toString()}`)
        expect(totalSupply).to.not.be.equal("0")
    })

    it("Fetches The Token URI", async () => {
        let tokenURL = await deployedMarketplace.getTokenURL("1")
        console.log(`The deployed token's URL is ${tokenURL}`)
        expect(tokenURL).to.not.be.equal("")
    })


    it("Makes sure that the minter address is equal to that of the marketplace's version", async function () {
        const roomAddress = await deployedMarketplace.minterAddress()
        expect(roomAddress).to.be.equal(deployedMinter.address)
    })

    it("Confirms that the customer receives NFT after purchase", async function () {
        await deployedMarketplace.buyNFT(deployedMarketplace.address, customer.address, "1")
        const customerBalance = await deployedMinter.getBalance(customer.address)
        //console.log(customerBalance)
        expect(customerBalance.toString()).to.be.equal("1")
    })

    // it("Accepts NFTs", async () => {
    //     await deployedMinter.connect(customer).approve(deployedMarketplace.address, "1");
    //     let returnReceipt = await deployedMarketplace.lodgeOut(customer.address, deployedMarketplace.address, "1")
    //     await returnReceipt.wait()
    //     console.log(`The hash for the lodge-out transaction is ${returnReceipt.hash}`)
    //     let customerBalance = await deployedMinter.getBalance(customer.address)
    //     console.log(`The customer's balance is ${customerBalance.toString()}`)
    //     expect(customerBalance).to.equal("0")
    // })

    it("accepts payment", async () => {
        await expect(deployedMarketplace.connect(customer).pay(owner.address, { value: etherToWei("10") })).to.changeEtherBalances([customer.address, owner.address], [etherToWei("-10"), etherToWei("10")])
        let ownerBalance = await ethers.provider.getBalance(owner.address)
        let customerBalance = await ethers.provider.getBalance(customer.address)
        console.log(`The owner's balance is ${ethers.utils.formatEther(ownerBalance.toString())}`)
        console.log(`The customer's balance is ${ethers.utils.formatEther(customerBalance.toString())}`)
    })

    it("makes sure users cannot buy NTF twice", async () => {
        await expect(deployedMarketplace.buyNFT(deployedMarketplace.address, customer.address, "1")).to.be.reverted;
    })


})

