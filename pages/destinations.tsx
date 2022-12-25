import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/destinations.module.css'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import { useDispatch, useSelector } from 'react-redux'
import {  _setDestination } from "../components/reducers/action"
import { useRouter } from 'next/router'

const Destinations: NextPage = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const active = "w-[20%] h-[2.5rem] flex items-center justify-center cursor-pointer border-b-2 border-[#2282f0]"
    const inactive = "w-[20%] h-[2.5rem] flex items-center justify-center cursor-pointer hover:border-b-2 hover:border-[#ffffff80]"

    const [moonEffect, setMoonEffect] = useState(inactive)
    const [marsEffect, setMarsEffect] = useState(inactive)
    const [europaEffect, setEuropaEffect] = useState(inactive)
    const [titanEffect, setTitanEffect] = useState(inactive)


    const [image, setImage] = useState("");
    const [destination, setDestination] = useState("");
    const [destDescription, setDestDescription] = useState("");
    const [averageDist, setAverageDist] = useState("");
    const [estTravelTime, setEstTravelTime] = useState("");

    function switchToMoon() {
        const _image = "/images/destination/image-moon.webp"
        const _destination = 'moon'
        const _destDesctiption = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo-11 landing sites.'
        const _averageDist = "384,400km";

        const _estTravelTime = "3 days";

        const price = "0.02"


        setImage(_image)
        setDestination(_destination)
        setDestDescription(_destDesctiption)
        setAverageDist(_averageDist)
        setEstTravelTime(_estTravelTime)
        

        setMoonEffect(active)
        setMarsEffect(inactive)
        setEuropaEffect(inactive)
        setTitanEffect(inactive)

        dispatch(_setDestination(_destination))

    }

    useEffect(() => {
        switchToMoon()
    }, [])

    function switchToMars() {
        const _image = '/images/destination/image-mars.webp';
        const _destination = "mars";
        const _destDesctiption =
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
        const _averageDist = '225 mil. km';

        const _estTravelTime = "9 months";

        const price = "0.022"

        setImage(_image);
        setDestination(_destination);
        setDestDescription(_destDesctiption);
        setAverageDist(_averageDist);
        setEstTravelTime(_estTravelTime);
        


        setMoonEffect(inactive)
        setMarsEffect(active)
        setEuropaEffect(inactive)
        setTitanEffect(inactive)

        dispatch(_setDestination(_destination))

    }

    function switchToEuropa() {
        const _image = '/images/destination/image-europa.webp';
        const _destination = "europa";
        const _destDesctiption =
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        const _averageDist = "628 mil. km";

        const _estTravelTime = "3 years";

        const price = "0.053"

        setImage(_image);
        setDestination(_destination);
        setDestDescription(_destDesctiption);
        setAverageDist(_averageDist);
        setEstTravelTime(_estTravelTime);
        


        setMoonEffect(inactive)
        setMarsEffect(inactive)
        setEuropaEffect(active)
        setTitanEffect(inactive)

        dispatch(_setDestination(_destination))

    }

    function switchToTitan() {
        const _image = '/images/destination/image-titan.webp';
        const _destination = "titan";
        const _destDesctiption =
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
        const _averageDist = "1.6 bil. km";
        const _estTravelTime = "7 years";

        const price = "0.013"

        setImage(_image);
        setDestination(_destination);
        setDestDescription(_destDesctiption);
        setAverageDist(_averageDist);
        setEstTravelTime(_estTravelTime);
        


        setMoonEffect(inactive)
        setMarsEffect(inactive)
        setEuropaEffect(inactive)
        setTitanEffect(active)

        dispatch(_setDestination(_destination))

    }

    function handlePopupState(e: any) {
        e.preventDefault()
        router.push(`/destination/${destination}`)
    }

    return (
        <div className={` h-[100vh] w-[100vw] font-opensans flex flex-col justify-end items-center relative  ${styles.destinations_main}`}>
            <Head>
                <title>Solaris | Destinations</title>
                <meta name="description" content="Solaris: CodeByDolapo" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>
            <Navbar place={"destinations"} />
            <Menu />
            <div className={`w-[100%] h-[80vh] text-white flex lg:flex-row items-center lg:justify-center mt-[10vh] md:pt-[5rem] xs:flex-col xs:overflow-y-scroll overflow-x-hidden`}>
                <div className="lg:w-[40%] lg:h-full flex justify-around items-center flex-col xs:w-[100%] xs:min-h-[60vh]">
                    <h3 className={`text-white w-[350px] uppercase text-xl tracking-[1px] md:my-5`}>01 Pick Your Destination</h3>
                    <img className={`lg:w-[35vw] lg:h-[35vw] xs:w-[90vw] xs:h-[90vw] ${styles.planet}`} src={image} alt='' />
                </div>

                <div className={`lg:w-[60%] h-full text-white flex flex-col items-center justify-around lg:mt-0 md:my-[5rem] xs:w-[100vw] xs:mt-[3rem]`}>
                    <div className={`w-[95%] flex flex-row justify-around items-center`}>
                        <div className={moonEffect} onClick={switchToMoon}>
                            <h1 className={`uppercase text-white text-[1rem]`}>Moon</h1>
                        </div>
                        <div className={marsEffect} onClick={switchToMars}>
                            <h1 className={`uppercase text-white text-[1rem]`} >Mars</h1>
                        </div>
                        <div className={europaEffect} onClick={switchToEuropa}>
                            <h1 className={`uppercase text-white text-[1rem]`} >Europa</h1>
                        </div>
                        <div className={titanEffect} onClick={switchToTitan}>
                            <h1 className={`uppercase text-white text-[1rem]`} >Titan</h1>
                        </div>
                    </div>

                    <h1 className={`text-7xl uppercase tracking-[5px] lg:mt-0 xs:mt-[2rem]`}>{destination}</h1>

                    <h3 className={`text-xl leading-7 tracking-wide text-center lg:mt-0 xs:mt-[2rem]`}>{destDescription}</h3>

                    <hr />

                    <div className={`lg:w-[90%] flex justify-between items-center uppercase lg:px-0 lg:mt-0 xs:mt-[2rem] xs:w-[100%] xs:px-2`}>
                        <div className={`flex flex-col justify-center items-center`}>
                            <h3 className={`lg:text-sm mb-[1rem] xs:text-xs`} >avg distance</h3>
                            <h1 className={`lg:text-5xl uppercase tracking-[5px] xs:text-xl`}>{averageDist}</h1>
                        </div>

                        <div className={`flex flex-col justify-center items-center`}>
                            <h3 className={`lg:text-sm mb-[1rem] xs:text-xs`}>est travel time</h3>
                            <h1 className={`lg:text-5xl uppercase tracking-[5px] xs:text-xl`}>{estTravelTime}</h1>
                        </div>
                    </div>
                    <div className={`w-full h-[4rem] flex items-center lg:justify-start lg:px-5 lg:my-0 xs:my-[2rem] xs:justify-around`}>
                        <button className={`lg:w-[15rem] h-[3rem] bg-white font-bold text-[#313131] rounded-lg lg:mx-5 xs:w-[10rem] hover:scale-[110%] ease-in-out duration-[200ms] cursor-pointer`} onClick={handlePopupState}>More Details</button>
                    </div>
                </div>
            </div>


        </div>
    );

}

export default Destinations
