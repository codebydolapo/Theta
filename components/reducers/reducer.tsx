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

const popupState = (state = false, action: {type: string})=>{
    switch(action.type){
        case "POPUP_ACTIVE":
            return state = true;
        case "POPUP_INACTIVE":
            return state = false;
        default:
            return false
    }
}

export const planet = (state = "", action: {type: string, planet: string})=>{
    // console.log(action.planet)
    switch(action.type){
        case "SET_PLANET":
            return state = action.planet;
        default:
            return ""
    }
}


export const allReducers = combineReducers({
    hamburgerState,
    popupState,
    planet
})