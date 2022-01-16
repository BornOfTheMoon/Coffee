import styles from "./ProductCard.module.css"

function ProductCard({product}) {
    return (
        <div className={styles.productCard}>
            <div className={styles.productCard__content}>
                <img src={product.image}/>
                <div className={styles.productCard__content_info}>
                    <p>Название: {product.name}</p>
                    <p>Описание: {product.description}</p>
                    <p>Цена: {product.price}</p>
                </div>
            </div>

            //TO DO переадресация на страницу товара с прокидыванием в props товара
            <button type="submit" className={styles.productCard__button}>
                Подробнее
            </button>
        </div>
    )
}

export default ProductCard
