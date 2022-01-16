import styles from "./UserOrders.module.css"
import OrderCard from "../OrderCard/OrderCard";

const orders = [
    {
        products: [
            {
                name: "first_name",
                price: 150
            },
            {
                name: "second_name",
                price: 250
            },
            {
                name: "first_name",
                price: 100
            },
        ],
        total: 500,
        status: "В работе"
    },
    {
        products: [
            {
                name: "first_name",
                price: 150
            },
            {
                name: "third_name",
                price: 100
            },
        ],
        total: 250,
        status: "Готов"
    }
]

function UserOrders() {
    return (
        <div className={styles.userOrders}>
            {orders.map((option)=>
            <OrderCard order={option.products} total={option.total} status={option.status}/>)}
        </div>
    )
}

export default UserOrders
