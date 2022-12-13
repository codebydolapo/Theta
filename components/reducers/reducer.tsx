import { combineReducers } from "redux"

// interface Actions{
//     type: string,
//     item: {
//         name: string,
//         description: string,
//         image: string,
//         value: string
//     }
// }



// export const itemData  = (state = {}, action: Actions)=>{
//     console.log(action.item)
//     switch(action.type){
//         case "SET_ITEM":
//             return action.item
//         default:
//             return state
//     }
// }

export const category = (state = '', action: {type: string, category: string})=>{
    switch(action.type){
        case "SET_CATEGORY":
            return state = action.category
        default:
            return state
    }
}

export const account = (state = "", action: {type: string, account: any} )=>{
    switch(action.type){
        case "SAVE_ACCOUNT":
            return state = action.account
        default:
            return state
    }
}

export const marketplaceContract = (state = "", action: {type: string, contractInstance: any})=>{
    switch(action.type){
        case "SAVE_MARKETPLACE_CONTRACT":
            return state = action.contractInstance
        default:
            return state
    }
}

export const minterContract = (state = [], action: {type: string, contractInstance: any})=>{
    switch(action.type){
        case "SAVE_MINTER_CONTRACT":
            return state = action.contractInstance
        default:
            return state
    }
}


export const allReducers = combineReducers({
    category,
    account,
    marketplaceContract,
    minterContract
})