import styles from "./OrderCard.module.css"
import OrderCardItem from "./OrderCardItem";


function OrderCard({order}) {
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