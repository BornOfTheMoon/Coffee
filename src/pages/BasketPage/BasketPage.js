import styles from "./BasketPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Basket from "../../components/Basket/Basket.js";

function BasketPage() {
    return (
        <div className={styles.basketPage}>
            <Sidebar item="basket"/>
            <div className={styles.basketPage__content}>
                <Basket/>
            </div>
        </div>
    )
}

export default BasketPage