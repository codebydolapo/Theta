import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'

//fill="#0B0D17"

function Navbar() {

    const active = "h-[90%] w-[20%] flex items-center justify-center border-b-[3px] border-b-[#2282f0] cursor-pointer"
    const inactive = "h-[90%] w-[20%] flex items-center justify-center hover:border-b-[3px] hover:border-b-[#fff] cursor-pointer"

    const [homeEffect, setHomeEffect] = useState(inactive)
    const [destinationsEffect, setDestinationsEffect] = useState(inactive)
    const [crewEffect, setCrewEffect] = useState(inactive)
    const [TechnologyEffect, setTechnologyEffect] = useState(inactive)

    function handleHomeActivity(){
        setHomeEffect(active)
        setDestinationsEffect(inactive)
        setCrewEffect(inactive)
        setTechnologyEffect(inactive)
    }

    function handleDestinationsActivity(){
        setHomeEffect(inactive)
        setDestinationsEffect(active)
        setCrewEffect(inactive)
        setTechnologyEffect(inactive)
    }
    function handleCrewActivity(){
        setHomeEffect(inactive)
        setDestinationsEffect(inactive)
        setCrewEffect(active)
        setTechnologyEffect(inactive)
    }
    function handleTechnologyActivity(){
        setHomeEffect(inactive)
        setDestinationsEffect(inactive)
        setCrewEffect(inactive)
        setTechnologyEffect(active)
    }

    return (
        <div className={`w-[100vw] h-[6rem] flex flex-row items-center justify-between px-[20px] fixed top-0`}>
            <div className={`w-[20%] h-full flex items-center justify-around `}>
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path
                            fill="#000"
                            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                        />
                    </g>
                </svg>
                <h1 className={`text-white text-5xl font-bold font-times uppercase`}>Solaris</h1>
            </div>
            <div className={`w-[60%] h-[80%] flex flex-row justify-around items-center bg-[#ffffff1a] px-[30px] rounded-lg  ${styles.navBar}`}>
                <Link href={`/`}>
                    <div className={homeEffect} onClick = {handleHomeActivity}>
                        <div className={`text-white text-sm uppercase font-light tracking-[1px] `}>
                            <b>00</b> Home
                        </div>
                    </div>
                </Link>
                <Link href={`/destinations`}>
                    <div className={destinationsEffect} onClick = {handleDestinationsActivity}>
                        <div className={`text-white text-sm uppercase font-light tracking-[1px]`} >
                            <b>01</b> Destinations
                        </div>
                    </div>
                </Link>

                <Link href={`/crew`}>
                    <div className={crewEffect} onClick = {handleCrewActivity}>
                        <div className={`text-white text-sm uppercase font-light tracking-[1px]`} >
                            <b>02</b> Crew
                        </div>
                    </div>
                </Link>

                <Link href={``}>
                    <div className={TechnologyEffect} onClick = {handleTechnologyActivity}>
                        <div className={`text-white text-sm uppercase font-light tracking-[1px]`}>
                            <b>03</b> Technology
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Navbar