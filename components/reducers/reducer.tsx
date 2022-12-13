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

export const allReducers = combineReducers({
    category
})