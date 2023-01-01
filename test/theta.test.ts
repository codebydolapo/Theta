import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import {moveBlocks} from '../utils/move_blocks'
import {moveTime} from '../utils/move_time'

const SECONDS_IN_A_DAY = 86400

describe("Theta", async function () {

    function etherToWei(_etherAmount: any) {
        return ethers.utils.parseUnits(_etherAmount, "ether")
    }

    let deployedTheta: Contract
    let deployedThetaCoin: Contract
    let owner: any, customer: any
    let dai, stakeAmount = etherToWei("100000")

    before(async () => {
        [owner, customer] = await ethers.getSigners();

        const Theta = await ethers.getContractFactory("Theta");
        const ThetaCoin = await ethers.getContractFactory("ThetaCoin");
        deployedThetaCoin = await ThetaCoin.deploy();
        deployedTheta = await Theta.deploy(deployedThetaCoin.address, deployedThetaCoin.address);

        deployedTheta.deployed()
        deployedThetaCoin.deployed()
    })

    it("Should allow users to stake and claim rewards", async function () {
        await deployedThetaCoin.approve(deployedTheta.address, stakeAmount, { from: owner.address })
        await deployedTheta.stake(stakeAmount, { from: owner.address })
        const startingEarned = await deployedTheta.earned(owner.address)
        console.log(`Total earned for user ${owner.address} is ${startingEarned}`)

        await moveTime(SECONDS_IN_A_DAY)
        await moveBlocks(1)

        const endingEarned = await deployedTheta.earned(owner.address)
        console.log(`Total earned for user ${owner.address} is ${endingEarned}`)
    })

})

