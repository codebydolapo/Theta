function LandingCards(image: any){
    return(
        <div className = {`min-w-[23rem] w-[25rem] h-[25rem] hover:scale-[105%] ease duration-[200ms] mx-3 relative rounded-lg`}>
            <img className = {`w-full h-[23rem] rounded-[inherit] cursor-pointer`} src = {image} alt = ''/>
            <div className = {`w-full h-[30%] bg-[#111111] absolute bottom-0 rounded-[inherit]`}></div>
        </div>
    )
}

export default LandingCards