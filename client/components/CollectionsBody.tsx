import styles from '../styles/collectionsbody.module.css'
import { GlobeAltIcon, StarIcon, ShareIcon, DotsHorizontalIcon, SortAscendingIcon, SearchIcon, ViewGridIcon, ViewGridAddIcon, ChartSquareBarIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Items from './Items'
import { ReactNode } from 'react';




interface Collection {
    collection: {
        // map(arg0: ({ description, image, name, value }: { description: any; image: any; name: any; value: any }) => JSX.Element, arg1: never[]): import("react").ReactNode
        description: string,
        image: string,
        value: string,
        name: string
    }[]
}

// const collection: any = [
//     {
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
//     image: "/images/testApe.png",
//     value: "2628",
//     name: "26382",
//     },
//     {
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
//     image: "/images/testApe.png",
//     value: "2628",
//     name: "26382",
//     },
//     {
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
//     image: "/images/testApe.png",
//     value: "2628",
//     name: "26382",
//     },
//     {
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
//     image: "/images/testApe.png",
//     value: "2628",
//     name: "26382",
//     },
//     {
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
//     image: "/images/testApe.png",
//     value: "2628",
//     name: "26382",
//     },
//     {
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
//     image: "/images/testApe.png",
//     value: "2628",
//     name: "26382",
//     },
// ]

function CollectionsBody({ collection }: Collection) {

    

    console.log(collection)
// function CollectionsBody() {
    return (
        <div className={`w-full min-h-[100vh] h-auto flex flex-col items-center`}>

            <div className={`w-full h-auto relative mb-[2rem]`}>
                <img className={`w-full h-auto`} alt='' src='/images/bannerSlim2.jpg' />
                <img className={`md:w-[15rem] h-auto absolute bottom-[-2rem] rounded-bottom md:left-[3rem] border-8 border-white rounded-xl xs:w-[7rem] xs:left-[1rem]`} alt='' src='/images/collectionImage.png' />
            </div>

            {/* banner up */}

            <div className={`md:w-[95%] min-h-1/2 h-auto flex flex-col justify-start items-center xs:w-full`}>

                <div className={`w-full h-[5rem] flex flex-row`}>

                    <div className={`w-1/2 h-full flex items-center justify-start md:p-3 xs:p-2`}>
                        <h1 className={`md:text-4xl font-extrabold text-[#000000d3] xs:text-lg`}>CodeByDolapo: NFT Swarm</h1>
                    </div>

                    <div className={`w-1/2 h-full flex justify-end items-start`}>

                        <div className={`md:w-[5rem] h-full flex items-center justify-center mx-3 xs:w-[2rem]`}>
                            <GlobeAltIcon className={`md:w-[2rem] h-auto text-[#000000d3] xs:w-[1.5rem]`} />
                        </div>

                        <div className={`md:w-[5rem] h-full flex items-center justify-center mx-3 xs:w-[2rem]`}>
                            <StarIcon className={`md:w-[2rem] h-auto text-[#000000d3] xs:w-[1.5rem]`} />
                        </div>

                        <div className={`md:w-[5rem] h-full flex items-center justify-center mx-3 xs:w-[2rem]`}>
                            <ShareIcon className={`md:w-[2rem] h-auto text-[#000000d3] xs:w-[1.5rem]`} />
                        </div>

                        <div className={`md:w-[5rem] h-full flex items-center justify-center mx-3 xs:w-[2rem]`}>
                            <DotsHorizontalIcon className={`md:w-[2rem] h-auto text-[#000000d3] xs:w-[1.5rem]`} />
                        </div>

                    </div>
                </div>

                {/* nft collection title up */}

                <div className={`w-full md:h-[5rem] flex flex-col items-start justify-center my-2 md:px-5 xs:min-h-[5rem] xs:px-2`}>
                    <h1 className={`md:text-[1rem] text-[#353840] overflow-hidden xs:text-[0.75rem]`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</h1>
                    <h1 className={`md:text-[1rem] text-[#000000d3] xs:text-[0.75rem]`}>See More</h1>
                </div>

                {/* nft collection description up */}

                <div className={`w-full md:h-[4.5rem] flex flex-row items-center justify-start my-2 md:px-3 xs:px-1 xs-min-h-[3rem] xs:h-[3.5rem]`}>

                    <div className={`min-w-[5rem] w-auto px-2 h-full md:mx-3 flex flex-col items-start justify-between`}>
                        <h1 className={`md:text-lg text-[#000000c3] font-bold xs:text-base`}>20</h1>
                        <h1 className={`md:text-lg text-[#0000008c] font-bold xs:text-xs`}>Items</h1>
                    </div>

                    <div className={`min-w-[5rem] w-auto px-2 h-full md:mx-3 flex flex-col items-start justify-between`}>
                        <h1 className={`md:text-lg text-[#000000c3] font-bold xs:text-base`}>1</h1>
                        <h1 className={`md:text-lg text-[#0000008c] font-bold xs:text-xs`}>Owner(s)</h1>
                    </div>

                    <div className={`min-w-[5rem] w-auto px-2 h-full md:mx-3 flex flex-col items-start justify-between`}>
                        <h1 className={`md:text-lg text-[#000000c3] font-bold xs:text-base`}>0.11</h1>
                        <h1 className={`md:text-lg text-[#0000008c] font-bold xs:text-xs`}>Total Volume</h1>
                    </div>

                    <div className={`min-w-[5rem] w-auto px-2 h-full md:mx-3 flex flex-col items-start justify-between `}>
                        <h1 className={`md:text-lg text-[#000000c3] font-bold xs:text-base`}>0</h1>
                        <h1 className={`md:text-lg text-[#0000008c] font-bold xs:text-xs`}>Floor Price</h1>
                    </div>

                    <div className={`min-w-[5rem] w-auto px-2 h-full md:mx-3 flex flex-col items-start justify-between`}>
                        <h1 className={`md:text-lg text-[#000000c3] font-bold xs:text-base`}>###</h1>
                        <h1 className={`md:text-lg text-[#0000008c] font-bold xs:text-xs`}>Best Offer</h1>
                    </div>

                </div>

                {/* nft collection stats up */}

            </div>



            <div className={`w-full md:h-[5rem] flex flex-row my-4 mx:px-5 xs:min-h-[3rem] xs:px-2`}>

                <div className={`md:min-w-[5rem] w-auto h-full flex items-end justify-start border-b-2 border-0 border-black md:mx-5 xs:min-w-[4rem] xs:mr-2`}>
                    <h1 className={`font-bold text-[1rem] text-black mb-1`}>Items</h1>
                </div>

                <div className={`md:min-w-[5rem] w-auto h-full flex items-end justify-start md:mx-5 xs:min-w-[4rem] xs:mr-2`}>
                    <h1 className={`font-bold text-[1rem] text-[#000000b3] mb-1`}>Activity</h1>
                </div>

            </div>


            {/* nft collection container menu up */}


            <div className={`w-full min-h-[50vh] h-auto flex flex-col justify-start items-center`}>

                <div className={`w-full h-[5rem] flex flex-row justify-between items-around`}>

                    <div className={`md:w-[40%] h-full flex flex-row xs:w-[50%]`}>
                        <div className={`md:w-[20%] h-full flex items-center justify-center  xs:w-0`}>
                            <SortAscendingIcon className={`w-[2rem] h-auto text-[#000000d3] `} />
                        </div>
                        <div className={`md:w-[80%] flex justify-around items-center h-full xs:w-[100%]`}>
                            <SearchIcon className={`md:w-[1.5rem] h-auto text-[#000000be] xs:w-[1.2rem]`} />
                            <input className={`md:w-[90%] md:h-[3rem] border-2 border-grey rounded-lg outline-0 pl-3 xs:h-[2rem] xs:w-[85%]`} placeholder='Search by name or attribute' type='text' />
                        </div>
                    </div>

                    <div className={`md:w-[60%] h-full flex flex-row items-center md:justify-around xs:justify-end xs:w-[50%] `}>
                        <div className={`md:w-[30%] h-[3rem] flex border-2 border-grey rounded-lg xs:w-0`}>
                            <div className={`w-[80%] h-full flex items-center justify-start ml-3 md:visible xs:hidden`}>
                                <h1 className={`md:text-base font-bold xs:text-xs`}>Price low to high</h1>
                            </div>
                            <div className={`w-[20%] h-full flex items-center justify-center`}>
                                <ChevronDownIcon className={`w-[1.5rem] h-auto text-[#000000be]`} />
                            </div>
                        </div>
                        <div className={`md:w-[30%] h-full flex items-center justify-center xs:w-0`}>
                            <div className={`w-[30%] h-auto flex items-center justify-center`}>
                                <ViewGridIcon className={`w-[2rem] h-auto text-[#000000be]`} />
                            </div>
                            <div className={`w-[30%] h-auto flex items-center justify-center`}>
                                <ViewGridAddIcon className={`w-[2rem] h-auto text-[#000000be]`} />
                            </div>
                            <div className={`w-[30%] h-auto flex items-center justify-center`}>
                                <ChartSquareBarIcon className={`w-[2rem] h-auto text-[#000000be]`} />
                            </div>
                        </div>
                        <div className={`md:w-[30%] h-[3rem] rounded-lg border-2 border-grey flex items-center justify-center md:px-0 xs:w-[80%] md:mx-0 xs:mx-2 xs:h-[2rem] `}>
                            <h1 className={`text-[#3578e5] font-bold md:text-base xs:text-sm`}>Make collection offer</h1>
                        </div>
                    </div>

                </div>

                {/* nft collection display settings up */}

                <div className={`w-full min-h-[70vh] h-auto flex`}>
                    <div className={`md:w-[20%] min-h-[12rem] max-h-[33rem] h-full flex flex-col xs:w-0`}>

                        <div className={`w-full h-[40%] flex flex-col items-center justify-around my-5`}>
                            <div className={`w-full h-[3rem] flex flex-row items-center justify-around`}>
                                <div className={`w-[80%] h-full flex items-center justify-start pl-5 `}>
                                    <h1 className={`font-bold md:text-[0.9rem] xs:text-[0rem]`}>Status</h1>
                                </div>
                                <div className={`w-[20%] h-full flex items-center justify-center`}>
                                    <ChevronDownIcon className={`w-[1.5rem] h-auto text-[#000000be] font-bold`} />
                                </div>
                            </div>

                            <div className={`w-full h-[3rem] flex items-center justify-start pl-5 `}>
                                <h1 className={`text-[#000000b3] md:text-[0.9rem] xs:text-[0rem]`}>Status</h1>
                            </div>
                            <div className={`w-full h-[3rem] flex items-center justify-start pl-5`}>
                                <h1 className={`text-[#000000b3] md:text-[0.9rem] xs:text-[0rem]`}>Status</h1>
                            </div>
                            <div className={`w-full h-[3rem] flex items-center justify-start pl-5`}>
                                <h1 className={`text-[#000000b3] md:text-[0.9rem] xs:text-[0rem]`}>Status</h1>
                            </div>

                        </div>

                        <div className={`w-full h-[30%] flex flex-col items-center justify-around my-5`}>

                            <div className={`w-full h-[3rem] flex flex-row items-center justify-around `}>
                                <div className={`w-[80%] h-full flex items-center justify-start pl-5`}>
                                    <h1 className={`font-bold md:text-[0.9rem] xs:text-[0rem]`}>Price</h1>
                                </div>
                                <div className={`w-[20%] h-full flex items-center justify-center`}>
                                    <ChevronDownIcon className={`w-[1.5rem] h-auto text-[#000000be] font-bold`} />
                                </div>
                            </div>

                            <div className={`w-full h-[3rem] flex flex-row items-center justify-around `}>
                                <div className={`w-[80%] h-full flex items-center justify-start pl-5`}>
                                    <h1 className={`font-bold md:text-[0.9rem] xs:text-[0rem]`}>Quantity</h1>
                                </div>
                                <div className={`w-[20%] h-full flex items-center justify-center`}>
                                    <ChevronDownIcon className={`w-[1.5rem] h-auto text-[#000000be] font-bold`} />
                                </div>
                            </div>

                            <div className={`w-full h-[3rem] flex flex-row items-center justify-around `}>
                                <div className={`w-[80%] h-full flex items-center justify-start pl-5`}>
                                    <h1 className={`font-bold md:text-[0.9rem] xs:text-[0rem]`}>Currency</h1>
                                </div>
                                <div className={`w-[20%] h-full flex items-center justify-center`}>
                                    <ChevronDownIcon className={`w-[1.5rem] h-auto text-[#000000be] font-bold`} />
                                </div>
                            </div>

                        </div>
                        <div className={`w-full h-[20%] flex flex-col items-center justify-around mt-5`}>

                            <div className={`w-full h-[3rem] flex flex-row items-center justify-around `}>
                                <div className={`w-[80%] h-full flex items-center justify-start pl-5 `}>
                                    <h1 className={`font-bold md:text-[0.9rem] xs:text-[0rem]`}>Background</h1>
                                </div>
                                <div className={`w-[20%] h-full flex items-center justify-center`}>
                                    <ChevronDownIcon className={`w-[1.5rem] h-auto text-[#000000be] font-bold`} />
                                </div>
                            </div>

                            <div className={`w-full h-[3rem] flex flex-row items-center justify-around`}>
                                <div className={`w-[80%] h-full flex items-center justify-start pl-5`}>
                                    <h1 className={`font-bold md:text-[0.9rem] xs:text-[0rem]`}>Clothes</h1>
                                </div>
                                <div className={`w-[20%] h-full flex items-center justify-center`}>
                                    <ChevronDownIcon className={`w-[1.5rem] h-auto text-[#000000be] font-bold`} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={`md:w-[80%] max-h-[33rem] h-auto flex flex-wrap items-center justify-around px-5 overflow-scroll xs:w-[100%] ${styles.itemsContainer}`}>
                        {collection.map(({ description, image, name, value }: any, index) => {
                            return <Items
                                description={description}
                                image={image}
                                name={name}
                                value={value}
                                key={index}
                                index={index}
                            />
                        })}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CollectionsBody