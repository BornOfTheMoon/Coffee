import styles from "./MenuPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Menu from "../../components/Menu/Menu";
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest"
import MenuTabBar from "../../components/MenuTabBar/MenuTabBar";

const defaultProducts = [
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

function MenuPage() {
    const [products, setProducts] = useState(defaultProducts)
    const [filterProducts, setFilterProducts] = useState(defaultProducts)
    const API_URL = 'http://localhost:8000/api/product/'

    useState(async () => {
        await GetRequest(defaultProducts, setProducts, API_URL)
        await GetRequest(defaultProducts, setFilterProducts, API_URL)
    })

    console.log(products)

    return (
        <div className={styles.menuPage}>
            <Sidebar item="menu"/>
            <div className={styles.menuPage__content}>
                <MenuTabBar products={products} setProducts={setFilterProducts}/>
                <Menu products={filterProducts}/>
            </div>
        </div>
    )
}

export default MenuPage