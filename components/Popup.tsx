import { ArrowLeftIcon } from "@heroicons/react/outline"
import styles from '../styles/destinations.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { activatePopup, deactivatePopup } from "./reducers/action"
import { useEffect, useState } from "react"

interface Props {
    destination: string,
    image: string
}


function Popup({ destination, image }: Props) {

    const [vehicle, setVehicle] = useState("")
    const [capsule, setCapsule] = useState("")
    const [spacePort, setSpaceport] = useState("")
    const [price, setPrice] = useState("")

    const [_destination, _setDestination] = useState("moon")

    const dispatch = useDispatch()

    useEffect(() => {
        handleDestination()
    }, [])

    function handleDestination() {
        if (_destination == "moon") {
            setVehicle("Apollo2022")
            setCapsule("Hermes 0H6F4")
            setSpaceport("Lekki 6D#f")
            setPrice("0.02")
        } else if (_destination == "mars") {
            setVehicle("Deidre82623")
            setCapsule("Zeus H2T5S")
            setSpaceport("LAG262")
            setPrice("0.022")
        } else if (_destination == "europa") {
            setVehicle("Diana82623")
            setCapsule("Hera H2T5S")
            setSpaceport("ABK262")
            setPrice("0.053")
        }
        else if (_destination == "europa") {
            setVehicle("Ceberus82623")
            setCapsule("Hades H2T5S")
            setSpaceport("LAG262")
            setPrice("0.013")
        }
    }

    function handlePopupState() {
        dispatch(deactivatePopup())
    }

    return (
        <div className={`w-[95vw] h-[90vh] bottom-auto top-auto lg:pb-0 flex flex-col items-center justify-between bg-black absolute rounded-xl z-[10] border-[1px] border-grey overflow-y-scroll overflow-x-hidden xs:pb-4`}>
            <div className={`w-full h-[5rem] px-5 flex items-center justify-end `}>
                <ArrowLeftIcon className={`text-white lg:w-[3rem] font-thin cursor-pointer xs:w-[2rem]`} onClick={handlePopupState} />
            </div>
            <div className={`w-full lg:h-[80%] flex lg:flex-row items-center lg:my-0 lg:justify-center xs:flex-col xs:h-[80vh] xs:my-5`}>
                <div className={`lg:w-[50%] h-full lg:my-0 flex items-center justify-center xs:w-full xs:my-5`}>
                    <img className={`lg:w-[25rem] lg:h-[25rem] xs:w-[90vw] xs:h-[90vw] ${styles.planet}`} src={image} alt='' />
                </div>
                <div className={`lg:w-[50%] h-full flex xs:w-full`}>
                    <div className={`lg:w-[50%] h-full xs:w-full`}>
                        <div className={`w-full h-[25%] px-1 lg:my-0 flex flex-col justify-center items-start xs:my-3`}>
                            <h3 className={`text-white px-1 lg:text-base xs:text-sm`}>Commander</h3>
                            <h1 className={`text-white lg:text-2xl text-bold uppercase xs:text-sm`}>Douglas Hurley</h1>
                        </div>
                        <div className={`w-full h-[25%] lg:my-0 flex flex-col justify-center items-start xs:my-3`}>
                            <h3 className={`text-white px-1 lg:text-base xs:text-sm`}>Engineer</h3>
                            <h1 className={`text-white lg:text-2xl text-bold uppercase xs:text-sm`}>Anousheh Ansari</h1>
                        </div>
                        <div className={`w-full h-[25%] lg:my-0 flex flex-col justify-center items-start xs:my-3`}>
                            <h3 className={`text-white px-1 lg:text-base xs:text-sm`}>Specialist</h3>
                            <h1 className={`text-white lg:text-2xl text-bold uppercase xs:text-sm`}>Mark Shuttleworth</h1>
                        </div>
                        <div className={`w-full h-[25%] lg:my-0 flex flex-col justify-center items-start xs:my-3`}>
                            <h3 className={`text-white px-1 lg:text-base xs:text-sm`}>Pilot</h3>
                            <h1 className={`text-white lg:text-2xl text-bold uppercase xs:text-sm`}>Victor Glover</h1>
                        </div>
                    </div>
                    <div className={`w-[50%] h-full `}>
                        <div className={`w-full h-[25%] lg:my-0 flex flex-col justify-center lg:items-start xs:my-3 xs:items-end`}>
                            <h3 className={`text-white px-1 lg:text-base xs:text-sm`}>Vehicle</h3>
                            <h1 className={`text-white lg:text-2xl text-bold uppercase xs:text-sm`}>{vehicle}</h1>
                        </div>
                        <div className={`w-full h-[25%] lg:my-0 flex flex-col justify-center lg:items-start xs:my-3 xs:items-end`}>
                            <h3 className={`text-white px-1 lg:text-base xs:text-sm`}>Capsule</h3>
                            <h1 className={`text-white lg:text-2xl text-bold uppercase xs:text-sm`}>{capsule}</h1>
                        </div>
                        <div className={`w-full h-[25%] lg:my-0 flex flex-col justify-center lg:items-start xs:my-3 xs:items-end`}>
                            <h3 className={`text-white px-1 lg:text-base xs:text-sm`}>Spaceport</h3>
                            <h1 className={`text-white lg:text-2xl text-bold uppercase xs:text-sm`}>{spacePort}</h1>
                        </div>
                        <div className={`w-full h-[25%] lg:my-0 flex flex-col justify-center lg:items-start xs:my-3 xs:items-end`}>
                            <h3 className={`text-white px-1 lg:text-base xs:text-sm`}>Price</h3>
                            <div className={`w-full h-auto flex items-center lg:justify-start xs:justify-end`}>
                                <h1 className={`text-white lg:text-2xl text-bold uppercase xs:text-sm`}>{price}</h1>
                                <img className={`w-5 h-5 rounded`} src={`/icons/ether.png`} alt={``} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full h-[5rem] flex items-center justify-center lg:pl-[5rem] lg:my-0 xs:my-[3rem]`}>
                <button className={`lg:w-[15rem] h-[3rem] bg-[#2282f0] font-bold text-white rounded-lg lg:mx-3 xs:w-[10rem] hover:scale-[110%] ease-in-out duration-[200ms] cursor-pointer`}>Book Flight</button>
            </div>
        </div>
    )
}

export default Popup;

//<div className = {``}></div>
