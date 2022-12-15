import Link from 'next/link'
import { useDispatch } from 'react-redux'
import styles from '../styles/items.module.css'
import { activateCheckoutPopup } from './reducers/action';
import { addItem } from './reducers/action'

interface Collection{
    description: string,
    image: string,
    name: string,
    index: string,
    price: string
}

function NFTCard({description, image, name, price, index}: Collection) {

    const dispatch =  useDispatch()

    function handleCheckout(){
        dispatch(activateCheckoutPopup())
        dispatch(addItem({
            image,
            name,
            index,
            price,
            description
        }))
    }

    return (
        //  <Link href = '/item/item'>
        <div className={`md:w-[18rem] md:h-[25rem] rounded-xl bg-[#ffffff] md:m-5 relative xs:w-[98%] xs:min-h-[25rem] xs:my-5 cursor-pointer ${styles.item}`} onClick = {handleCheckout}>
        {/* <div className={`md:w-[18rem] md:h-[25rem] rounded-xl bg-[#ffffff] m-5 relative xs:w-[95%] xs:min-h-[25rem] ${styles.item}`} onClick = {handleAddItem}> */}
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
                    <h3 className={`text-sm text-[#0000008c] overflow-hidden`}>{description}</h3>
                </div>
                <div className={`w-full h-[30%] px-3 flex items-center justify-end border-t-2 border-[#0000002a]`}>
                    {/* <h3 className={`text-[0.75rem] font-extralight text-[#000000d3]`}>Ends In 5 Days</h3> */}
                    <h3 className={`text-base font-bold text-[#3578e5]`}>{price}</h3>
                    <img className={`w-5 h-5 rounded`} src={`/icons/ether.png`} alt={``} />
                </div>
            </div>
            {/* <div className = {`absolute w-full h-[2rem] bottom-0 left-0 bg-[#0000ff]`}></div> */}
        </div>
        // </Link>
    )
}

export default NFTCard