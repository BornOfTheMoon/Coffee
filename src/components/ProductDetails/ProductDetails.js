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

    function fromBasket() {
        let basket = sessionStorage.getItem("basket")
        let sum = sessionStorage.getItem("sum")
        if (!basket) {
            return
        }
        sum -= product.price
        if (!sum) {
            sessionStorage.removeItem("basket")
            sessionStorage.removeItem("sum")
            return;
        }
        let order = basket.split(" ")
        console.log(order)
        let newOrder = []
        let flag = true
        order.map((name) => {
            if (name === product.name) {
                if (flag) {
                    flag = false
                } else {
                    newOrder.push(name)
                }
            } else if (name !== "" && name !== " ") {
                newOrder.push(name)
            }
        })
        console.log(newOrder)
        if (newOrder) {
            basket = newOrder[0]
            newOrder.slice(1, ).map((name) => basket += " " + name)
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
            <button type="submit" className={styles.productCard__button}
                    onClick={fromBasket}>
                Из корзины
            </button>
        </div>
    )
}

export default ProductDetails