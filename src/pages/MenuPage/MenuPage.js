import styles from "./MenuPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Menu from "../../components/Menu/Menu";

function MenuPage() {
    return (
        <div className={styles.menuPage}>
            <Sidebar/>
            <div className={styles.menuPage__content}>
                <Menu/>
            </div>
        </div>
    )
}

export default MenuPage