import styles from "./ProductAddPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar.js";
import ProductAdd from "../../components/ProductAdd/ProductAdd";


function ProductAddPage() {
    return (
        <div className={styles.productAdd}>
            <Sidebar item="add"/>
            <div className={styles.productAdd__content}>
                <ProductAdd/>
            </div>
        </div>
    )
}

export default ProductAddPage