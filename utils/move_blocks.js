const {network} = require("hardhat")
const { forEachTrailingCommentRange } = require("typescript")

async function moveBlocks(amount){
    console.log("moving blocks...")
    for(let i =0; i < amount; i++){
        await network.provider.request({
            method: "evm_mine",
            params: []
        })
    }
    console.log(`moved ${amount} blocks`)
}

module.exports = {moveBlocks}