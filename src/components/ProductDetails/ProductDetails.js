import styles from "./ProductDetails.module.css"

// const product = {
//                     image: "/images/productAvatar.jpg",
//                     name: "first_name",
//                     description: "some text",
//                     price: 150
//                 }

function ProductDetails({product}) {
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

            <button type="submit" className={styles.productCard__button}>
                В корзину
            </button>
        </div>
    )
}

export default ProductDetails