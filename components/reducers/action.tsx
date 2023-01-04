export const activateHamburger = () => {
    return { type: "HAMBURGER_ACTIVE" }
}

export const deactivateHamburger = () => {
    return { type: "HAMBURGER_INACTIVE" }
}

export const saveAccount = (account: string)=>{
    return{
        type: "SAVE_ACCOUNT",
        account
    }
}

export const saveContract = (contract: any)=>{
    return{
        type: "SAVE_CONTRACT",
        contract
    }
}