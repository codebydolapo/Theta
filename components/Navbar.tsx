import { HomeIcon, ChartBarIcon, UserGroupIcon, } from "@heroicons/react/outline"

//fill="#0B0D17"

function Navbar() {



    return (
        <div className={`w-[100vw] h-[4rem] flex flex-row items-center justify-between`}>
            <div className={`w-[20%] h-full flex items-end justify-start`}>
                {/* <img className={`w-[3.5rem] h-[3.5rem] rounded-full mx-3`} src='/icons/theta.png' alt='' /> */}
                <h1 className={`text-[#1da1f2] font-[1000] text-[2.5rem] font-opensans mx-5`}>THE<b className={`text-white`}>TA</b></h1>
            </div>
            <div className={`w-[65%] h-full flex items-center justify-center`}>
                <div className={`w-[8rem] h-full flex flex-col items-center justify-end mx-[5rem] cursor-pointer`}>
                    <UserGroupIcon className={`text-white w-[2rem] my-[3px]`} />
                    <h1 className={`text-white text-xs`}>DAO</h1>                </div>
                <div className={`w-[8rem] h-full border-b-2 border-[#1da1f2] flex flex-col items-center justify-end mx-[5rem] cursor-pointer`}>
                    <HomeIcon className={`text-white w-[2rem] my-[3px]`} />
                    <h1 className={`text-white text-xs`}>Home</h1>
                </div>
                <div className={`w-[8rem] h-full flex flex-col items-center justify-end mx-[5rem] cursor-pointer`}>
                    <ChartBarIcon className={`text-white w-[2rem] my-[3px]`} />
                    <h1 className={`text-white text-xs`}>Analytics</h1>                </div>
            </div>
            <div className={`w-[15%] h-full flex items-center justify-center`}>
                <div className={`w-[90%] h-[2.5rem] rounded-lg bg-[#1da1f2] flex items-center justify-center cursor-pointer hover:scale-[105%] ease-in-out duration-[200ms]`}>
                    <img className={`w-[1.5rem] h-[1.5rem] rounded-full mx-2`} src={`/icons/twitterIcon.png`} alt='' />
                    <h1 className={`text-white font-bold text-base`}>Join Twitter</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar