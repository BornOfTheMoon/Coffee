import styles from "./Menu.module.css"
import ProductCard from "../ProductCard/ProductCard";

const products = [
    {
        image: "/images/productAvatar.jpg",
        name: "first_name",
        description: "some text",
        price: 150
    },
    {
        image: "/images/productAvatar.jpg",
        name: "second_name",
        description: "some text",
        price: 150
    },
    {
        image: "/images/productAvatar.jpg",
        name: "third_name",
        description: "some text",
        price: 150
    }
]

function Menu() {
    return (
        <div className={styles.menu}>
            {products.map((option)=> <ProductCard product={option}/>)}
        </div>
    )
}

export default Menu
