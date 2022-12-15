// interface Item{
//     name: string,
//     image: string,
//     value: string
// }

// export const addItem = (item: Item | null | undefined)=>{
//     return{
//         type: "SET_ITEM",
//         item
//     }
// }

// import { Marketplace } from '../../typechain-types/contracts/Marketplace'
// import { Minter } from '../../typechain-types/contracts/Minter'

export const changeCategory = (category: any)=>{
    return {
        type: "SET_CATEGORY",
        category
    }
}

export const saveAccount = (account: any)=>{
    return{
        type: "SAVE_ACCOUNT",
        account
    }
}

export const saveMarketplaceContract = (contractInstance: undefined | any)=>{
    return{
        type: "SAVE_MARKETPLACE_CONTRACT",
        contractInstance
    }
}

export const saveMinterContract = (contractInstance: undefined | any)=>{
    return{
        type: "SAVE_MINTER_CONTRACT",
        contractInstance
    }
}