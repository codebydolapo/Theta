import { ArrowLeftIcon } from "@heroicons/react/outline"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { deactivatePopup, activatePopup } from "../../components/reducers/action"
import { ethers } from 'ethers'
import { saveAccount, saveContract } from '../../components/reducers/action'
import { solarisAddress } from '../../src/solarisAddress'
import solarisABI from '../../artifacts/contracts/Solaris.sol/Solaris.json'
import Link from "next/link"
import styles from '../../styles/planet.module.css'
import Router from "next/router"



function FlightBooking() {

    const [vehicle, setVehicle] = useState("")
    const [capsule, setCapsule] = useState("")
    const [spacePort, setSpaceport] = useState("")
    const [price, setPrice] = useState("")

    // const [_destination, _setDestination] = useState("moon")

    const [paid, setPaid] = useState(false)

    const [userEmail, setUserEmail] = useState()

    // const _destination = useSelector((state: any)=> {return state.destination})

    const [image, setImage] = useState('/images/destination/image-moon.webp')

    const dispatch = useDispatch()

    useEffect(() => {
        handleDestination()
        // console.log(Router.asPath)
    }, [])

    function handleDestination() {
        if (Router.asPath == "/destination/moon") {
            setVehicle("Apollo2022")
            setCapsule("Hermes 0H6F4")
            setSpaceport("Lekki 6D#f")
            setPrice("0.02")
            setImage('/images/destination/image-moon.webp')
        } else if (Router.asPath == "/destination/mars") {
            setVehicle("Deidre82623")
            setCapsule("Zeus H2T5S")
            setSpaceport("LAG262")
            setPrice("0.022")
            setImage('/images/destination/image-mars.webp')
        } else if (Router.asPath == "/destination/europa") {
            setVehicle("Diana82623")
            setCapsule("Hera H2T5S")
            setSpaceport("ABK262")
            setPrice("0.053")
            setImage('/images/destination/image-europa.webp')
        }
        else if (Router.asPath == "/destination/titan") {
            setVehicle("Ceberus82623")
            setCapsule("Hades H2T5S")
            setSpaceport("LAG262")
            setPrice("0.013")
            setImage('/images/destination/image-titan.webp')
        }
    }


    const [connectSwitch, setConnectSwitch] = useState(false)
    // const [account, setAccount] = useState("")
    const [contract, setContract] = useState<any>([])

    useEffect(() => {
        let Window: any = window
        if (connectSwitch && Window.ethereum !== undefined) {
            // setAccount("")
            dispatch(saveAccount(""))
            dispatch(saveContract(null))

            let provider = Window.ethereum
            let ethersProvider = new ethers.providers.Web3Provider(provider);

            Window.ethereum.request({ method: "eth_requestAccounts" })
                .then((accounts: any) => {
                    // setAccount(accounts[0])
                    dispatch(saveAccount(accounts[0]))
                    console.log(accounts[0])
                })
                .catch((err: any) => console.log(err))

            let signer = ethersProvider.getSigner()

            const solaris: any | undefined = new ethers.Contract(solarisAddress, solarisABI.abi, signer)


            if (solaris) {
                dispatch(saveContract(solaris))
                setContract(solaris)
                console.log(solaris)
            }

        } else if (connectSwitch && Window.ethereum == undefined) {
            alert("Please Download Metamask")
        }
        setConnectSwitch(false)
    }, [connectSwitch])

    const account = useSelector((state: any) => {
        return state.account
    })

    function connectWallet() {
        setConnectSwitch(true)
        dispatch(activatePopup())
        // e.preventDefault()
    }

    async function handlePayment() {
        if (account && userEmail == "") {
            alert("please enter an email address")
        }
        else if (account && userEmail !== "") {
            const paymentReceipt = await contract.acceptPayment({ from: account, value: ethers.utils.parseUnits(price, "ether") })
            if (paymentReceipt.hash) {
                setPaid(true)
            }
        } else {
            alert("connect your wallet!")
        }

    }

    function handleEmailAddress(e: any) {
        setUserEmail(e.target.value)
    }

    return (
        <div className={`w-[100vw] h-[100vh] lg:pb-0 flex flex-col items-center justify-between bg-black overflow-y-scroll overflow-x-hidden xs:pb-4 ${styles.planet_main}`}>
            <div className={`w-full h-[5rem] px-5 flex items-center justify-between px-3 mt-3`}>
                <Link href="/destinations">
                    <ArrowLeftIcon className={`text-white lg:w-[3rem] font-thin cursor-pointer xs:w-[2rem]`} />
                </Link>
                {account !== "" ?
                    <div className={`w-[12rem] h-[40px] bg-[#1266e4] rounded-lg flex justify-center items-around cursor-pointer`} onClick={connectWallet}>
                        <h1 className={`text-white lg:text-base xs:text-sm flex justify-center items-center`}>{`${account.slice(0, 6)}...${account.slice(38, 42)}`}</h1>
                    </div>
                    :
                    <div className={`w-[12rem] h-[40px] bg-[#1266e4] rounded-lg flex justify-center items-around cursor-pointer`} onClick={connectWallet}>
                        <h1 className={`text-white lg:text-base xs:text-sm flex justify-center items-center`}>Connect Wallet</h1>
                    </div>
                }
            </div>
            <div className={`w-full lg:h-[80%] flex lg:flex-row items-center lg:my-0 lg:justify-center xs:flex-col xs:h-[80vh] xs:my-5`}>
                <div className={`lg:w-[50%] h-full lg:my-0 flex flex-col items-center justify-around xs:w-full xs:my-5`}>
                    <img className={`lg:w-[25rem] lg:h-[25rem] xs:w-[90vw] xs:h-[90vw] ${styles.planet}`} src={image} alt='' />
                    <input type="email" placeholder="Enter your email Address" className={`w-[90%] h-[45px] border-[1px] border-white text-white px-2 rounded-lg`} onChange={handleEmailAddress} value={userEmail} />
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
            <div className={`w-full min-h-[5rem] flex items-center justify-center lg:pl-[5rem] lg:mt-0 xs:mt-[3rem]`}>
                {/* <button className={`lg:w-[15rem] h-[3rem] bg-[#2282f0] font-bold text-white rounded-lg lg:mx-3 xs:w-[10rem] hover:scale-[110%] ease-in-out duration-[200ms] cursor-pointer`}>Book Flight</button> */}
                {paid ? <button className={`lg:w-[15rem] h-[3rem] bg-[#2282f0] font-bold text-white rounded-lg lg:mx-3 xs:w-[10rem] hover:scale-[110%] ease-in-out duration-[200ms] cursor-pointer`}>Payment Successful</button>
                    :
                    <button className={`lg:w-[15rem] h-[3rem] bg-[#2282f0] font-bold text-white rounded-lg lg:mx-3 xs:w-[10rem] hover:scale-[110%] ease-in-out duration-[200ms] cursor-pointer`} onClick={handlePayment}>Book Flight</button>
                }
            </div>
        </div>
    )
}

export default FlightBooking;

//<div className = {``}></div>

