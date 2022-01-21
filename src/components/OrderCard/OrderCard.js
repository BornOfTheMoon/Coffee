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
            <div className={styles.orderCard__footer}>
            <p className={styles.orderCard__total}>Сумма заказа: {order.price}</p>
            <button>Отменить заказ</button>
            </div>
        </div>
    )
}

export default OrderCard