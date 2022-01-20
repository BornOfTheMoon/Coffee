import styles from "./OrderCard.module.css"
import OrderCardItem from "./OrderCardItem";
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest";


const defaultOrder = {
        products: [],
        total: 0,
        status: "В работе"
    }

function OrderCard({id}) {
    console.log(id)
    const [order, setOrder] = useState(defaultOrder)
    const API_URL = `http://localhost:8000/api/order/${id}`

    useState(async () => {
        await GetRequest(defaultOrder, setOrder, API_URL)

    })

    const products = order.products

    return (
        <div className={styles.orderCard}>
            <p className={styles.orderCard__status}>Статус: {order.status}</p>
            <div className={styles.orderCard__content}>
                {products.map((option)=> <OrderCardItem name={option}/>)}
            </div>
            <p className={styles.orderCard__total}>Сумма заказа: {order.price}</p>
        </div>
    )
}

export default OrderCard