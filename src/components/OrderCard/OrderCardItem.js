import styles from "./OrderCardItem.module.css"

function OrderCardItem({name, price}) {
    return (
        <div className={styles.orderCardItem}>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default OrderCardItem