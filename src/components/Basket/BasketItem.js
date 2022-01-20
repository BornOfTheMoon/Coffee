import styles from "./BasketItem.module.css"
import {useNavigate} from "react-router";
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest";


const defaultProduct = {
    name: "name",
    price: 0
}

function BasketItem({name}) {
    const navigate = useNavigate();

    console.log(name)
    const [product, setProduct] = useState(defaultProduct)

    useState(async () => {
        await GetRequest(defaultProduct, setProduct, `http://localhost:8000/api/product/${name}`)
    })

    console.log(product)
    const price = product.price
    console.log(price)

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