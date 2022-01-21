import styles from "./CurrentOrdersCard.module.css"
import OrderCardItem from "./CurrentOrdersCardItem.js";


function CurrentOrdersCard({order, status}) {
    const products = order.products

    let buttonText = ""
    if (order.status === "wait confirm") {
        buttonText = "Принять"
    } else if (order.status === "accepted") {
        buttonText = "Готов"
    } else if (order.status === "finished") {
        buttonText = "Получен"
    }

    return (
        <div className={styles.currentOrderCard}>
            <div className={styles.orderCard}>
                <p className={styles.orderCard__user}>Пользователь: {order.user}</p>
                <div className={styles.orderCard__content}>
                    {products.map((option)=> <OrderCardItem name={option}/>)}
                </div>
                <p className={styles.orderCard__total}>Сумма заказа: {order.price}</p>
            </div>
            <div className={styles.currentOrderCard__buttons}>
                <button className={styles.currentOrderCard__buttons_reject}>
                    Отклонить
                </button>
                <button className={styles.currentOrderCard__buttons_accept}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default CurrentOrdersCard