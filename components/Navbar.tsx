import { UserCircleIcon, CreditCardIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
// import { useDisconnect, useAddress, useMetamask } from '@thirdweb-dev/react'


function Navbar() {

    // const disconnect = useDisconnect()
    // const connect = useMetamask()
    // const address = useAddress()

    return (
        <div className={`w-full h-[60px] flex flex-row space-between`}>
            <div className={`w-[55%] h-full flex items-center justify-between`}>
                <div className={`md:w-[30%] h-full flex items-center md:justify-center xs:w-[100%] xs:justify-start`}>
                    <img className={`md:w-[40px] h-[40px] rounded-full md:mx-2 xs:w-[40px] xs:h-[40px] xs:mx-1`} alt='' src='/icons/logo.jpg' />
                    <h1 className={`font-extrabold md:text-5xl text-[#1c1e21ea] xs:text-2xl`}><b className = {`text-[#1877f2]`}>E</b>nefti</h1>
                </div>
                <div className={`w-[67%] h-[80%] flex items-center justify-between border-2 border-grey rounded-lg md:visible xs:hidden`}>
                    <div className={`w-[3rem] h-full flex justify-center items-center cursor-pointer`}>
                        <SearchIcon className={`w-[1.5rem] text-[#1c1e21c5] `} />
                    </div>
                    <input className={`w-auto min-w-[80%] h-full outline-0 border-0 pl-3`} placeholder='Search for colections, lists and NFTs' />
                    <div className={`w-[3rem] h-full flex justify-center items-center cursor-pointer`}>
                        <XIcon className={`w-[1.5rem] text-[#1c1e21c5]`} />
                    </div>
                </div>
            </div>
            <div className={`w-[45%] h-full flex md:justify-center xs:justify-end`}>
                <div className={`md:w-[75%] h-full flex justify-between xs:w-0`}>
                    <div className={`w-[24%] h-full flex items-center justify-center cursor-pointer`}>
                        <h1 className={`md:text-[0.9rem] hover:scale-[102%] ease font-extrabold text-[#1c1e21e0] xs:text-[0rem]`}>HOME</h1>
                    </div>
                    <Link href='/collections/something'>
                        <div className={`w-[24%] h-full flex items-center justify-center cursor-pointer`}>
                            <h1 className={`md:text-[0.9rem] hover:scale-[102%] ease font-extrabold text-[#1c1e21e0] xs:text-[0rem]`}>COLLECTION</h1>
                        </div>
                    </Link>
                    <div className={`w-[24%] h-full flex items-center justify-center cursor-pointer`}>
                        <h1 className={`md:text-[0.9rem] hover:scale-[102%] ease font-extrabold text-[#1c1e21e0] xs:text-[0rem]`}>CREATE</h1>
                    </div>
                    {/* <div className={`w-[24%] h-full flex items-center justify-center cursor-pointer`}>
                        <h1 className={`md:text-[0.9rem] font-extrabold text-[#1c1e21e0] xs:text-[0rem]`}>CREATE</h1>
                    </div> */}
                </div>
                <div className={`md:w-[25%] h-full flex md:mx-0 xs:mx-2 xs:w-[5rem] `}>
                    <div className={`md:w-1/2 h-full flex items-center justify-center cursor-pointer xs:w-[2rem] xs:mx-1`}>
                        <UserCircleIcon className={`w-[2.5rem] hover:scale-[110%] ease-in-out text-[#1c1e21e0]`}/>
                    </div>
                    <div className={`md:w-1/2 h-full flex items-center justify-center cursor-pointer xs:w-[2rem] xs:mx-1`}>
                        <CreditCardIcon className={`w-[2.5rem] hover:scale-[110%] ease-in-out text-[#1c1e21e0]`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar