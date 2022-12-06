import Link from 'next/link'
import { useDispatch } from 'react-redux'
import styles from '../styles/items.module.css'
import { addItem } from './reducers/action'

interface Collection{
    description: string,
    image: string,
    name: string,
    value: string
}

function Items({description, image, name, value, index}: Collection) {

    const dispatch =  useDispatch()

    function handleAddItem(){
        dispatch(addItem({
            image,
            name,
            value
        }))
    }

    return (
        <Link href = '/item/item'>
        <div className={`md:w-[18rem] md:h-[25rem] rounded-xl bg-[#ffffff] m-5 relative xs:w-[95%] xs:min-h-[25rem] ${styles.item}`} onClick = {handleAddItem}>
            <div className={`md:w-[18rem] md:h-[18rem] overflow-hidden xs:w-full xs-h-[95vw]`}>
                <img className={`rounded-xl md:w-auto md:h-full xs:w-full xs:h-auto ${styles.image}`} alt= '' src ={image}/>
            </div>
            <div className={`w-full h-[7rem] flex flex-col items-center justify-around`}>
                <div className={`w-full h-[30%] px-3 flex items-center justify-start`}>
                    <h3 className={`text-sm font-bold`}>#{name}</h3>
                </div>
                <div className={`w-full h-[40%] px-3 flex flex-col items-start justify-center`}>
                    {/* <h3 className={`text-xs`}>Price</h3>
                    <h3 className={`text-xs font-bold`}>20ETH</h3> */}
                    <h3 className={`text-sm overflow-hidden`}>{description}</h3>
                </div>
                <div className={`w-full h-[30%] px-3 flex items-center justify-start`}>
                    {/* <h3 className={`text-[0.75rem] font-extralight text-[#000000d3]`}>Ends In 5 Days</h3> */}
                    <h3 className={`text-xs font-extrabold text-[#3131a7]`}>{value ? value : Math.floor(Math.random() * 100)}<b className={`font-extrabold`}>ETH</b></h3>
                </div>
            </div>
            {/* <div className = {`absolute w-full h-[2rem] bottom-0 left-0 bg-[#0000ff]`}></div> */}
        </div>
        </Link>
    )
}

export default Items