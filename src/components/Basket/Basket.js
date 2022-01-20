import styles from "./Basket.module.css"
import BasketItem from "./BasketItem.js";


async function PostOrder(data, API_URL) {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}


function Basket() {
    const sum = sessionStorage.getItem("sum")
    const basket = sessionStorage.getItem("basket")
    let empty = ""
    let order = []
    if (!basket) {
        empty = "Пусто :("
    } else {
        order = basket.split(" ")
    }

    async function toOrders() {
        const sum = sessionStorage.getItem("sum")
        const basket = sessionStorage.getItem("basket")
        if (!basket) {
            return
        }
        let order = basket.split(" ")
        const data = {
            price: +sum,
            products: order,
            place: "D1"
        }
        sessionStorage.removeItem('basket')
        sessionStorage.removeItem('sum')
        await PostOrder(data, "http://localhost:8000/api/order/")
    }


    return (
        <div className={styles.basket}>
            <div className={styles.basket__content}>
                <p className={styles.basket__title}>Выбранные товары:</p>
                {order.map((option) => <BasketItem name={option}/>)}
                <p>{empty}</p>
            </div>
            <div className={styles.basket__footer}>
                <p>Сумма заказа: {sum}</p>
                <button type="submit" onClick={toOrders}>
                    Сделать заказ
                </button>
            </div>
            <img src={catLogo} alt="cat" className={styles.basket__catLogo}/>
        </div>
    )
}

export default Basket