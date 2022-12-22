import styles from "../styles/menu.module.css"
// import { useSelector } from 'react-redux'
import { ArrowLeftIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux'
import { activateHamburger, deactivateHamburger } from './reducers/action'

function Menu() {

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
        <div className={hamburgerState ? styles.menu : styles.menuActive}>
            {hamburgerState && <>
                <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                    <ArrowLeftIcon className={styles.ChevronUpIcon} />
                    {/* <h2 className = {`text-white text-xl`}>back</h2> */}
                </div>
                <Link href='/home'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link href='/destinations'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <h1>Destinations</h1>
                    </div>
                </Link>
                <Link href='/crew'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <h1>Crew</h1>
                    </div>
                </Link>
                <Link href='/technology'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <h1>Technology</h1>
                    </div>
                </Link>
                <button className={`w-[90%] h-[2.5rem] text-base text-white mx-5 bg-[#1877f2] rounded-xl md:invisible xs:visible`}>Connect wallet</button>

            </>}
        </div>
    )
}

export default Menu