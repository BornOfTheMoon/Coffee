import styles from "./ProductDetails.module.css"
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";


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
            <ProductDetailsCard product={product}/>
            <div className={styles.buttons}>
                <button type="submit" className={styles.productCard__button}
                    onClick={toBasket}>
                    В корзину
                </button>
                <button type="submit" className={styles.productCard__button}
                        onClick={fromBasket}>
                    Из корзины
                </button>
            </div>
        </div>
    )
}

export default ProductDetails