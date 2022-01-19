import styles from "./OrderCardItem.module.css"

function OrderCardItem({name, price}) {
    return (
        <div className={styles.orderCardItem}>
            <p className={styles.orderCardItem__title}>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default OrderCardItem