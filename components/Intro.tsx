import Navbar from "./Navbar"
import Hero from './Hero'

function Intro(){
    return(
        <div className = {`w-[100vw] h-[100vh]`}>
            <Navbar/>
            <Hero/>
        </div>
    )
}

export default Intro