import styles from "./CurrentOrdersCard.module.css"
import OrderCardItem from "./CurrentOrdersCardItem.js";


function deleteOrder(order) {
    return  fetch( "http://localhost:8000/api/order", {
        method: "DELETE",
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

function addOrder(order) {
    console.log(order)
    return  fetch( "http://localhost:8000/api/order", {
        method: "Post",
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

function CurrentOrdersCard({order}) {
    const products = order.products

    let buttonText = ""
    if (order.status === "wait confirm") {
        buttonText = "Принять"
    } else if (order.status === "accepted") {
        buttonText = "Готов"
    } else if (order.status === "finished") {
        buttonText = "Получен"
    }

    async function reject() {
        await deleteOrder(order)
        order.status = "rejected"
        await addOrder(order)
    }

    async function next() {
        await deleteOrder(order)
        if (order.status === "wait confirm") {
            order.status  = "accepted"
        } else if (order.status === "accepted") {
            order.status = "finished"
        } else if (order.status === "finished") {
            order.status  = "received"
        }
        await addOrder(order)
        location.reload()
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
                <button className={styles.currentOrderCard__buttons_reject} onClick={reject}>
                    Отклонить
                </button>
                <button className={styles.currentOrderCard__buttons_accept} onClick={next}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default CurrentOrdersCard