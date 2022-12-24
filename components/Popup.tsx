import { ArrowLeftIcon } from "@heroicons/react/outline"
import styles from '../styles/destinations.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { activatePopup, deactivatePopup } from "./reducers/action"
import { useEffect, useState } from "react"

interface Props{
    destination: string,
    image: string
}


function Popup({destination, image}: Props) {

    const [vehicle, setVehicle] = useState("")
    const [capsule, setCapsule] = useState("")
    const [spacePort, setSpaceport] = useState("")
    const [price, setPrice] = useState("")

    // const popupState = useSelector((state: any) => state.popupState)
    const planet = useSelector((state: any) => state.planet)

    const dispatch = useDispatch()

    useEffect(() => {
        ()=>{
            return destination == "moon" ?
                () => {
                    setVehicle("Apollo2022")
                    setCapsule("Hermes 0H6F4")
                    setSpaceport("Lekki 6D#f")
                    setPrice("0.02")
                } :
                destination == "mars" ?
                     () => {
                        setVehicle("Deidre82623")
                        setCapsule("Zeus H2T5S")
                        setSpaceport("LAG262")
                        setPrice("0.022")
                    } :
                    destination == "europa" ?
                        () => {
                            setVehicle("Diana82623")
                            setCapsule("Hera H2T5S")
                            setSpaceport("ABK262")
                            setPrice("0.053")
                        }
                        :
                        destination == "europa" ?
                            () => {
                                setVehicle("Ceberus82623")
                                setCapsule("Hades H2T5S")
                                setSpaceport("LAG262")
                                setPrice("0.013")
                            } :
                            null
        }
    }, [])

    function handlePopupState() {
        dispatch(deactivatePopup())
    }

    return (
        <div className={`w-[95%] h-[90vh] bottom-auto top-auto flex flex-col items-center justify-between bg-black absolute rounded-xl z-[10] border-[1px] border-grey`}>
            <div className={`w-full h-[5rem] px-5 flex items-center justify-end`}>
                <ArrowLeftIcon className={`text-white w-[3rem] cursor-pointer`} onClick={handlePopupState} />
            </div>
            <div className={`w-full h-[80%] flex items-center justify-center`}>
                <div className={`w-[50%] h-full flex items-center justify-center`}>
                    <img className={`lg:w-[25rem] lg:h-[25rem] xs:w-[90vw] xs:h-[90vw] ${styles.planet}`} src={image} alt='' />
                </div>
                <div className={`w-[50%] h-full  flex`}>
                    <div className={`w-[50%] h-full `}>
                        <div className={`w-full h-[25%]  flex flex-col justify-center items-start`}>
                            <h3 className={`text-white`}>Commander</h3>
                            <h1 className={`text-white text-2xl text-bold  uppercase`}>Douglas Hurley</h1>
                        </div>
                        <div className={`w-full h-[25%]  flex flex-col justify-center items-start`}>
                            <h3 className={`text-white`}>Engineer</h3>
                            <h1 className={`text-white text-2xl text-bold  uppercase`}>Anousheh Ansari</h1>
                        </div>
                        <div className={`w-full h-[25%]  flex flex-col justify-center items-start`}>
                            <h3 className={`text-white`}>Specialist</h3>
                            <h1 className={`text-white text-2xl text-bold  uppercase`}>Mark Shuttleworth</h1>
                        </div>
                        <div className={`w-full h-[25%]  flex flex-col justify-center items-start`}>
                            <h3 className={`text-white`}>Pilot</h3>
                            <h1 className={`text-white text-2xl text-bold  uppercase`}>Victor Glover</h1>
                        </div>
                    </div>
                    <div className={`w-[50%] h-full `}>
                        <div className={`w-full h-[25%]  flex flex-col justify-center items-start`}>
                            <h3 className={`text-white`}>Vehicle</h3>
                            <h1 className={`text-white text-2xl text-bold  uppercase`}>{vehicle}</h1>
                        </div>
                        <div className={`w-full h-[25%]  flex flex-col justify-center items-start`}>
                            <h3 className={`text-white`}>Capsule</h3>
                            <h1 className={`text-white text-2xl text-bold  uppercase`}>{capsule}</h1>
                        </div>
                        <div className={`w-full h-[25%]  flex flex-col justify-center items-start`}>
                            <h3 className={`text-white`}>Spaceport</h3>
                            <h1 className={`text-white text-2xl text-bold  uppercase`}>{spacePort}</h1>
                        </div>
                        <div className={`w-full h-[25%]  flex flex-col justify-center items-start`}>
                            <h3 className={`text-white`}>Price</h3>
                            <div className={`w-full h-auto flex items-center justify-start`}>
                                <h1 className={`text-white text-2xl text-bold  uppercase`}>{price}</h1>
                                <img className={`w-5 h-5 rounded`} src={`/icons/ether.png`} alt={``} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full h-[5rem] flex items-center justify-center pl-[5rem]`}>
                <button className={`lg:w-[15rem] h-[3rem] bg-[#2282f0] font-bold text-white rounded-lg lg:mx-3 xs:w-[10rem] hover:scale-[110%] ease-in-out duration-[200ms] cursor-pointer`}>Book Flight</button>
            </div>
        </div>
    )
}

export default Popup;

//<div className = {``}></div>
