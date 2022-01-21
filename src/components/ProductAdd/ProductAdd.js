import styles from "./ProductAdd.module.css"
import ProductAddCard from "../ProductAddCard/ProductAddCard";

function ProductAdd() {
    return (
        <div className={styles.productAdd}>
            <ProductAddCard/>
        </div>
    )
}

export default ProductAdd

