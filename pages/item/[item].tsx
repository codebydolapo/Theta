//this one opens a page containing the specific item you're looking for
//not to be confused with the 'items' component that i used as a reusable component
import ItemBody from "../../components/Checkout"
import Navbar from "../../components/Navbar"
import styles from '../../styles/itempage.module.css'

function Item(){
    return(
        <div className = {`max-h-[100vh] overflow-scroll ${styles.itempage}`}>
            <Navbar/>
            <ItemBody/>
        </div>
    )
}

export default Item