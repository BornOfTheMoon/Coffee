import styles from "./CurrentOrdersCardItem.module.css"
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest";

const defaultProduct = {
    name: "name",
    price: 0
}

function CurrentOrdersCardItem({name}) {
    console.log(name)
    const [product, setProduct] = useState(defaultProduct)

    useState(async () => {
        await GetRequest(defaultProduct, setProduct, `http://localhost:8000/api/product/${name}`)
    })

    console.log(product)
    const price = product.price
    console.log(price)

    return (
        <div className={styles.orderCardItem}>
            <p className={styles.orderCardItem__title}>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default CurrentOrdersCardItem