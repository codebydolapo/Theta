const {network} = require("hardhat")

async function moveTime(amount){
    console.log("moving time...")
    await network.provider.send("evm_increaseTime", [amount])
    console.log(`moved blocks forward by ${amount} seconds`)
}

module.exports = {moveTime}