import styles from "./Basket.module.css"
import BasketItem from "./BasketItem.js";
import catLogo from "../../images/cat.svg";

const order = [
    {
        name: "first_name",
        price: 150
    },
    {
        name: "second_name",
        price: 250
    },
    {
        name: "third_name",
        price: 100
    },
]


function Basket() {
    let sum = 0
    order.map((option) => {sum += option.price})
    return(
        <div className={styles.basket}>
            <div className={styles.basket__content}>
                <p className={styles.basket__title}>Выбранные товары:</p>
                {order.map((option) => <BasketItem product={option}/>)}
            </div>
            <div className={styles.basket__footer}>
                <p>Сумма заказа: {sum}</p>
                <button type="submit">
                    Сделать заказ
                </button>
            </div>
            <img src={catLogo} alt="cat" className={styles.basket__catLogo}/>
        </div>
    )
}

export default Basket