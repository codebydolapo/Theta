import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";

describe("Solaris", async function () {

    function etherToWei(_etherAmount: any) {
        return ethers.utils.parseUnits(_etherAmount, "ether")
    }
    let deployedSolaris: Contract
    let owner:any, customer: any

    before(async () => {
        [owner, customer] = await ethers.getSigners();

        const Solaris = await ethers.getContractFactory("Solaris");
        deployedSolaris = await Solaris.deploy(owner.address);

        deployedSolaris.deployed()
    })

    it("Should accept payment", async function(){
        expect(await deployedSolaris.connect(customer).acceptPayment({value: etherToWei("10")})).to.changeEtherBalances([deployedSolaris.address, customer.address], ["10", "-10"])
    })

    it("fetches total earnings", async function(){
        const totalCollected = await deployedSolaris.getTotalAmountReceived()
        expect(totalCollected).to.equal(etherToWei("10"))
    })

    it("pays total earnings to owner", async function(){
        const totalCollected = await deployedSolaris.getTotalAmountReceived()
        const withdrawalReceipt = await deployedSolaris.connect(owner).withdraw(owner.address)
        expect(withdrawalReceipt).to.changeEtherBalances([deployedSolaris.address, owner.address], [`-${totalCollected}`, totalCollected])
        // console.log(totalCollected.toString())
    })

    it("finds out how much an address paid", async function(){
        expect(await deployedSolaris.getAmountReceived(customer.address)).to.equal(etherToWei("10"))
    })

})

