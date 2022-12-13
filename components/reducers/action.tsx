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

export const saveMarketplaceContract = (contractInstance: any)=>{
    return{
        type: "SAVE_MARKETPLACE_CONTRACT",
        contractInstance
    }
}

export const saveMinterContract = (contractInstance: any)=>{
    return{
        type: "SAVE_MINTER_CONTRACT",
        contractInstance
    }
}