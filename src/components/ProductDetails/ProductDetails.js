import styles from "./ProductDetails.module.css"


function ProductDetails({product}) {
    function toBasket() {
        let basket = sessionStorage.getItem("basket")
        let sum = sessionStorage.getItem("sum")
        if (!basket) {
            basket = product.name
        } else {
            basket += " " + product.name
        }
        if (!sum) {
            sum = product.price
        } else {
            sum = +product.price + +sum
        }
        sessionStorage.setItem("basket", basket)
        sessionStorage.setItem("sum", sum)
    }
    return (
        <div className={styles.productDetails}>
            <div className={styles.productCard__content}>
                <img src={product.image} alt="avatar"/>
                <div className={styles.productCard__content_info}>
                    <p>Название: {product.name}</p>
                    <p>Описание: {product.description}</p>
                    <p>Цена: {product.price}</p>
                </div>
            </div>

            //TO DO добавить как-то уточнение данных товара (размер, сироп и т.д)

            <button type="submit" className={styles.productCard__button}
                    onClick={toBasket}>
                В корзину
            </button>
        </div>
    )
}

export default ProductDetails