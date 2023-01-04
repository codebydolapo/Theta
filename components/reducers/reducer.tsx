import { combineReducers } from "redux";

const hamburgerState = (state = false, action: {type: string})=>{
    switch(action.type){
        case "HAMBURGER_ACTIVE":
            return state= true;
        case "HAMBURGER_INACTIVE":
            return state=false;
        default:
            return false
    }
}

export const account = (state = "", action: {type: string, account: string})=>{
    switch(action.type){
        case "SAVE_ACCOUNT":
            return state = action.account;
        default:
            return ""
    }
}



export const allReducers = combineReducers({
    hamburgerState,
    account,
    
})