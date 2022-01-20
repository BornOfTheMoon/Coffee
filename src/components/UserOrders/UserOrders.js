import styles from "./UserOrders.module.css"
import OrderCard from "../OrderCard/OrderCard";
import catLogo from "../../images/cat.svg";


function UserOrders({orders}) {
    return (
        <div className={styles.userOrders}>
            {orders.map((option) => <OrderCard id={option}/>)}
            <img src={catLogo} alt="cat" className={styles.userOrders__catLogo}/>
        </div>
    )
}

export default UserOrders
