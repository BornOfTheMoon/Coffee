import styles from "./OrderCard.module.css"
import OrderCardItem from "./OrderCardItem";

function OrderCard({order, total, status}) {
    return (
        <div className={styles.orderCard}>
            <p className={styles.orderCard__status}>Статус: {status}</p>
            <div className={styles.orderCard__content}>
                {order.map((option)=> <OrderCardItem name={option.name} price={option.price}/>)}
            </div>
            <p className={styles.orderCard__total}>Сумма заказа: {total}</p>
        </div>
    )
}

export default OrderCard