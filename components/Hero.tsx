

function Hero() {
    return (
        <div className={`w-full h-[95vh] flex items-center justify-center`}>
            <div className={`w-[60%] h-full px-5 flex flex-col items-start justify-center`}>
                <h1 className = {`text-[3.5rem] font-bold text-white`}>Liquidity For Staked Assets</h1>
                <h4 className = {`font-[2rem] text-white my-3`}>Simplified and Secure Staking for Digital Assets</h4>
            <button className = {`w-[15rem] h-[3rem] text-white text-lg bg-[#1da1f2] rounded-lg my-3 hover:scale-[105%] ease-in-out duration-[200ms]`}>Stake Now</button>
            </div>
            <div className={`w-[40%] h-full flex items-center justify-center px-2`}>
                <div className={`w-[38vw] h-[38vw] rounded-full flex items-center justify-center`}>
                    <img className={`h-full`} src='/icons/ethereumSVG.svg' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Hero