import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/destinations.module.css'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Destinations: NextPage = () => {

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

        setImage(_image)
        setDestination(_destination)
        setDestDescription(_destDesctiption)
        setAverageDist(_averageDist)
        setEstTravelTime(_estTravelTime)

        setMoonEffect(active)
        setMarsEffect(inactive)
        setEuropaEffect(inactive)
        setTitanEffect(inactive)
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

        setImage(_image);
        setDestination(_destination);
        setDestDescription(_destDesctiption);
        setAverageDist(_averageDist);
        setEstTravelTime(_estTravelTime);

        setMoonEffect(inactive)
        setMarsEffect(active)
        setEuropaEffect(inactive)
        setTitanEffect(inactive)
    }

    function switchToEuropa() {
        const _image = '/images/destination/image-europa.webp';
        const _destination = "europa";
        const _destDesctiption =
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        const _averageDist = "628 mil. km";

        const _estTravelTime = "3 years";
        setImage(_image);
        setDestination(_destination);
        setDestDescription(_destDesctiption);
        setAverageDist(_averageDist);
        setEstTravelTime(_estTravelTime);

        setMoonEffect(inactive)
        setMarsEffect(inactive)
        setEuropaEffect(active)
        setTitanEffect(inactive)
    }

    function switchToTitan() {
        const _image = '/images/destination/image-titan.webp';
        const _destination = "titan";
        const _destDesctiption =
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
        const _averageDist = "1.6 bil. km";
        const _estTravelTime = "7 years";
        setImage(_image);
        setDestination(_destination);
        setDestDescription(_destDesctiption);
        setAverageDist(_averageDist);
        setEstTravelTime(_estTravelTime);

        setMoonEffect(inactive)
        setMarsEffect(inactive)
        setEuropaEffect(inactive)
        setTitanEffect(active)
    }

    return (
        <div className={` h-[100vh] w-[100vw] font-opensans flex flex-col justify-end items-center  ${styles.destinations_main}`}>
            <Head>
                <title>Solaris | Destinations</title>
                <meta name="description" content="Solaris: CodeByDolapo" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>
            <Navbar />
            <div className={`w-[100%] h-[80vh] text-white flex flex-row items-center justify-center mt-[10vh]`}>
                <div className="w-[40%] h-full text-white flex justify-around items-center flex-col">
                    <h3 className = {`text-white w-[350px] uppercase text-xl tracking-[1px]`}>01 Pick Your Destination</h3>
                    <img className={`w-[35vw] h-[35vw] ${styles.planet}`} src={image} alt='' />
                </div>

                <div className={`w-[60%] h-full text-white flex flex-col items-center justify-around`}>
                    <div className={`w-[95%] flex flex-row justify-around items-center`}>
                        <div className={moonEffect}  onClick={switchToMoon}>
                            <h1 className = {`uppercase text-white text-[1rem]`}>Moon</h1>
                        </div>
                        <div className={marsEffect} onClick={switchToMars}>
                            <h1 className = {`uppercase text-white text-[1rem]`} >Mars</h1>
                        </div>
                        <div className={europaEffect} onClick={switchToEuropa}>
                            <h1 className = {`uppercase text-white text-[1rem]`} >Europa</h1>
                        </div>
                        <div className={titanEffect} onClick={switchToTitan}>
                            <h1 className = {`uppercase text-white text-[1rem]`} >Titan</h1>
                        </div>
                    </div>

                    <h1 className={`text-7xl uppercase tracking-[5px]`}>{destination}</h1>

                    <h3 className={`text-xl leading-7 tracking-wide text-center`}>{destDescription}</h3>

                    <hr />

                    <div className={`w-[90%] flex justify-between items-center uppercase`}>
                        <div className={`flex flex-col justify-center items-center`}>
                            <h3 className = {`text-sm mb-[1rem]`} >avg distance</h3>
                            <h1 className={`text-5xl uppercase tracking-[5px]`}>{averageDist}</h1>
                        </div>

                        <div className={`flex flex-col justify-center items-center`}>
                            <h3 className = {`text-sm mb-[1rem]`}>est travel time</h3>
                            <h1 className={`text-5xl uppercase tracking-[5px]`}>{estTravelTime}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Destinations
