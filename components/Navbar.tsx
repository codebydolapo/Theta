import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activateHamburger, deactivateHamburger } from "./reducers/action"

//fill="#0B0D17"

function Navbar() {

    const active = "h-[90%] w-[20%] flex items-center justify-center border-b-[3px] border-b-[#2282f0] cursor-pointer"
    const inactive = "h-[90%] w-[20%] flex items-center justify-center hover:border-b-[3px] hover:border-b-[#fff] cursor-pointer"

    const [homeEffect, setHomeEffect] = useState(inactive)
    const [destinationsEffect, setDestinationsEffect] = useState(inactive)
    const [crewEffect, setCrewEffect] = useState(inactive)
    const [TechnologyEffect, setTechnologyEffect] = useState(inactive)

    function handleHomeActivity() {
        setHomeEffect(active)
        setDestinationsEffect(inactive)
        setCrewEffect(inactive)
        setTechnologyEffect(inactive)
    }

    function handleDestinationsActivity() {
        setHomeEffect(inactive)
        setDestinationsEffect(active)
        setCrewEffect(inactive)
        setTechnologyEffect(inactive)
    }
    function handleCrewActivity() {
        setHomeEffect(inactive)
        setDestinationsEffect(inactive)
        setCrewEffect(active)
        setTechnologyEffect(inactive)
    }
    function handleTechnologyActivity() {
        setHomeEffect(inactive)
        setDestinationsEffect(inactive)
        setCrewEffect(inactive)
        setTechnologyEffect(active)
    }

    interface HamburgerState {
        hamburgerState: boolean
    }

    const hamburgerState = useSelector((state: HamburgerState) => state.hamburgerState)

    const dispatch = useDispatch()

    function handleBurgerState() {
        if (hamburgerState == false) {
            dispatch(activateHamburger())
        } else if (hamburgerState == true) {
            dispatch(deactivateHamburger())
        }
    }

    return (
        <div className={` w-[100vw] h-[6rem] flex flex-row items-center justify-between lg:px-[20px] fixed top-0`}>
            <div className={`lg:w-[20%] h-full flex items-center lg:justify-around lg:px-0 xs:px-3 xs:justify-start xs:w-[30%]`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47">
                    <g fill="none" fillRule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path
                            fill="#000"
                            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                        />
                    </g>
                </svg>
                <h1 className={`text-white lg:text-5xl font-bold font-times uppercase xs:text-[0rem]`}>Solaris</h1>
            </div>
            <div className={`lg:w-[60%] h-[80%] flex flex-row lg:justify-around items-center lg:bg-[#ffffff1a] xs:bg-0 md:px-[30px] xs:w-[70%] rounded-lg xs:justify-end  ${styles.navBar}`}>
                <Link href={`/`}>
                    <div className={homeEffect} onClick={handleHomeActivity}>
                        <div className={`text-white lg:text-sm uppercase font-light tracking-[1px] xs:text-[0rem] `}>
                            <b >00</b> Home
                        </div>
                    </div>
                </Link>
                <Link href={`/destinations`}>
                    <div className={destinationsEffect} onClick={handleDestinationsActivity}>
                        <div className={`text-white lg:text-sm uppercase font-light tracking-[1px] xs:text-[0rem]`} >
                            <b>01</b> Destinations
                        </div>
                    </div>
                </Link>

                <Link href={`/crew`}>
                    <div className={crewEffect} onClick={handleCrewActivity}>
                        <div className={`text-white lg:text-sm uppercase font-light tracking-[1px] xs:text-[0rem]`} >
                            <b>02</b> Crew
                        </div>
                    </div>
                </Link>

                <Link href={``}>
                    <div className={TechnologyEffect} onClick={handleTechnologyActivity}>
                        <div className={`text-white lg:text-sm uppercase font-light tracking-[1px] xs:text-[0rem]`}>
                            <b>03</b> Technology
                        </div>
                    </div>
                </Link>

                <div className={`lg:w-[0rem] lg:h-0 lg:px-0 xs:px-3 flex flex-row justify-end items-center xs:w-full xs:h-full`}>
                    {/* <button className={`md:w-0 md:h-0 md:text-[0rem] text-white mx-5 bg-[#1877f2] md:rounded-xl xs:rounded-lg xs:h-[2rem] xs:text-[0.7rem] xs:w-[8rem] `}>Connect wallet</button> */}
                    <div className={`${styles.hamburger}`} onClick={handleBurgerState}>
                        <div className={`${styles.line}`} id={`${hamburgerState && styles.line1}`}></div>
                        <div className={`${styles.middleLine}`} id={`${hamburgerState && styles.line2}`}></div>
                        <div className={`${styles.line}`} id={`${hamburgerState && styles.line3}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar