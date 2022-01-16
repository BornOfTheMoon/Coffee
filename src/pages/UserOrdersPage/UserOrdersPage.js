import styles from "./UserOrdersPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import UserOrders from "../../components/UserOrders/UserOrders";

function UserOrdersPage() {
    return (
        <div className={styles.userOrdersPage}>
            <Sidebar item="orders"/>
            <div className={styles.userOrdersPage__content}>
                <UserOrders/>
            </div>
        </div>
    )
}

export default UserOrdersPage
