//this component works with the items page in pages/item/items
import { ShareIcon, DotsVerticalIcon, RefreshIcon, ArrowsExpandIcon, ClockIcon } from '@heroicons/react/outline'
import { EyeIcon, HeartIcon, TagIcon, CashIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'


function ItemBody() {

    interface Items{
        image?: string,
        value?: string,
        name?: string
    }

    const {image, value, name}: Items = useSelector((state: any) =>{ return state})
    // const image = '/images/testApe.png'
    // const value = '2833'
    // const name = '24837'

    return (
        <div className={`w-full md:max-h-[90vh] h-auto flex md:flex-row xs:flex-col xs:min-h-[100vh]`}>

            <div className={`md:w-[40%] md:h-[100vh] flex justify-center items-start pt-10 xs:w-[100vw] xs:mb-4`}>
                <img className={`w-[90%] h-auto rounded-xl`} alt='' src={image} />
            </div>

            <div className={`md:w-[60%] md:h-[100vh] flex flex-col items-center justify-start pt-10 xs:w-[100vw] xs:h-[80vh] xs:overflow-scroll`}>

                <div className={`w-full h-[12%] flex flex-row items-center justify-between`}>
                    <div className={`w-[50%] h-full flex px-5 justify-start items-center`}>
                        <h1 className={`text-[#3c9efa] mr-1 md:text-xl font-bold xs:text-lg`}>CodeByDolapo: NFT Swarm</h1>
                        <img className={`w-8 h-auto`} alt='' src='/icons/verified.jpg' />
                    </div>

                    <div className={`w-[50%] h-full px-5 flex  justify-end items-center`}>
                        <div className={`w-[12rem] h-[3rem] border-[1px] border-grey flex rounded-lg overflow-hidden`}>
                            <div className={`w-[25%] h-full border-[1px] border-grey flex items-center justify-center cursor-pointer`}>
                                <RefreshIcon className={`text-[#000000a1] w-[55%]`} />
                            </div>
                            <div className={`w-[25%] h-full border-[1px] border-grey flex items-center justify-center cursor-pointer`}>
                                <ArrowsExpandIcon className={`text-[#000000a1] w-[55%]`} />
                            </div>
                            <div className={`w-[25%] h-full border-[1px] border-grey flex items-center justify-center cursor-pointer`}>
                                <ShareIcon className={`text-[#000000a1] w-[55%]`} />
                            </div>
                            <div className={`w-[25%] h-full border-[1px] border-grey flex items-center justify-center cursor-pointer`}>
                                <DotsVerticalIcon className={`text-[#000000a1] w-[55%]`} />
                            </div>

                        </div>
                    </div>
                </div>

                <div className={`w-full h-[12%] flex items-center justify-start px-5 `}>
                    <h1 className={`text-4xl text-[#000000b6] font-extrabold`}>{name}</h1>
                </div>

                <div className={`w-full h-[12%] flex items-center justify-start px-5`}>
                    <div className={`w-[25%] h-full flex items-center justify-start`}>
                        <h1 className={`font-bold md:text-lg xs:text-sm text-[#000000a1]`}>Owned by #{Math.floor(Math.random() * 1000)}</h1>
                    </div>
                    <div className={`w-[25%] h-full flex items-center justify-start`}>
                        <EyeIcon className={`text-[#3c9efa] w-8 mr-1`} />
                        <h1 className={`font-bold md:text-lg xs:text-sm text-[#000000a1]`}>{Math.floor(Math.random() * 1000)}K Views</h1>
                    </div>
                    <div className={`w-[25%] h-full flex items-center justify-start `}>
                        <HeartIcon className={`text-[#fc0808a1] w-8 mr-1`} />
                        <h1 className={`font-bold md:text-lg xs:text-sm text-[#000000a1]`}>{Math.floor(Math.random() * 100)} Favourites</h1>
                    </div>
                </div>

                <div className={`w-[95%] h-[48%] rounded-xl border-2 border-grey flex flex-col items-center justify-around`}>

                    <div className={`w-full h-[25%] px-5 flex items-center justify-start`}>
                        <ClockIcon className={`text-[#00000059] w-6 mr-2`} />
                        <h1 className={`font-bold text-base text-[#00000059]`}>Sale Ends At Epoch {Math.floor(Math.random() * 1000000)}</h1>
                    </div>


                    <div className={`w-full h-[75%] flex flex-col items-center border-[1px] border-grey`}>

                        <div className={`w-full h-[40%] flex flex-col justify-around items-start px-5 bg-[#f5f5f5]`}>
                            <h1 className={`font-bold text-base text-[#00000073]`}>Current Price</h1>
                            <h1 className={`font-bold text-3xl text-[#000000d2]`}>{value} <sub className={`font-extrabold text-sm `}>ETH</sub></h1>
                        </div>

                        <div className={`w-full h-[60%] bg-[#f5f5f5] px-5 flex justify-start items-center`}>
                            <div className={`w-[12rem] h-[4rem] border-2 border-grey rounded-xl mr-2 bg-[#0664f0] flex items-center justify-center`}>
                                <CashIcon className={`text-white w-9 mr-2`} />
                                <h1 className={`text-white text-base font-bold`}>Buy Now</h1>
                            </div>
                            <div className={`w-[12rem] h-[4rem] border-2 border-grey rounded-xl mr-2 flex items-center justify-center`}>
                                <TagIcon className={`text-[#0664f0] w-8 mr-2`} />
                                <h1 className={`text-[#0664f0] text-base font-bold`}>Make Offer</h1>
                            </div>
                        </div>

                    </div>

                </div>

                {/* <div className = {`w-full h-[24%]`}></div> */}

            </div>


        </div>
    )
}

export default ItemBody;

//<div className = {``}></div>
