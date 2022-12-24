export const activateHamburger = () => {
    return { type: "HAMBURGER_ACTIVE" }
}

export const deactivateHamburger = () => {
    return { type: "HAMBURGER_INACTIVE" }
}

export const activatePopup = () => {
    return { type: "POPUP_ACTIVE" }
}

export const deactivatePopup = () => {
    return { type: "POPUP_INACTIVE" }
}

export const setPlanet = (planet: string)=>{
    return{
        type: "SET_PLANET",
        planet
    }
}