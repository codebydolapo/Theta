interface Item{
    name: string,
    image: string,
    value: string
}

export const addItem = (item: Item | null | undefined)=>{
    return{
        type: "SET_ITEM",
        item
    }
}