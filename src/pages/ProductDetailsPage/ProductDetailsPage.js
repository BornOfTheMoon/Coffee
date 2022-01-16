import styles from "./ProductDetailsPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

function ProductDetailsPage() {
    return (
        <div className={styles.productDetailsPage}>
            <Sidebar item="menu"/>
            <div className={styles.productDetailsPage__content}>
                <ProductDetails/>
            </div>
        </div>
    )
}

export default ProductDetailsPage