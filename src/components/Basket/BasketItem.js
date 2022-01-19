import styles from "./BasketItem.module.css"
import {useNavigate} from "react-router";

function BasketItem({product}) {
    const navigate = useNavigate();

    const {name, price} = product
    return (
        <div className={styles.basketItem}>
            <div className={styles.basketItem__info}>
                <p className={styles.basketItem__info_name}>{name}</p>
                <p className={styles.basketItem__info_price}>{price}</p>
            </div>
            <button type="submit" className={styles.basketItem__button}
                    onClick={async () =>{navigate(`/product/${name}`)}}>
                Подробнее
            </button>
        </div>
    )
}

export default BasketItem