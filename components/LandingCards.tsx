function LandingCards({ image, name, floorPrice }: any) {
    return (
        <div className={`min-w-[25rem] w-[25rem] h-[25rem] hover:scale-[105%] ease duration-[200ms] mx-3 relative rounded-xl`}>
            <img className={`w-full h-auto rounded-[inherit] cursor-pointer`} src={image} alt='' />
            <div className={`w-full h-[30%] bg-[#111111c0] absolute bottom-0 rounded-b-[inherit] flex items-center justify-center flex-col`}>
                <div className={`w-full h-1/2 flex items-center justify-between`}>
                    <div className={`w-full h-full flex items-center justify-start px-2`}>
                        <h1 className={`text-white font-extrabold text-2xl`}>{name}</h1>
                        <img className={`w-5 h-5 rounded-full mx-2`} src={`/icons/verified.jpg`} alt={``} />
                    </div>
                </div>
                <div className={`w-full h-1/2 flex items-center justify-start px-2`}>
                    <h1 className={`text-white text-base`}>Floor Price: {floorPrice}</h1>
                    <img className={`w-5 h-5 rounded`} src={`/icons/ether.png`} alt={``} />
                </div>
            </div>
        </div>
    )
}

export default LandingCards