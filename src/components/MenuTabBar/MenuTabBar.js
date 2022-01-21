import { useState } from "react";
import styles from "./MenuTabs.module.css";
import Tab from "./MenuTabItem";


const MenuTabBar = ({products, setProducts}) => {
    console.log(products)
    const tabs = [
        {
            name: "All",
            onclick: () => setProducts(products),
        },
        {
            name: "Food",
            onclick: () => setProducts(products.filter((value) => value.category === "food")),
        },
        {
            name: "Coffee",
            onclick: () => setProducts(products.filter((value) => value.category === "coffee")),
        },
        {
            name: "Tea",
            onclick: () => setProducts(products.filter((value) => value.category === "tea")),
        },
        {
            name: "Syrup",
            onclick: () => setProducts(products.filter((value) => value.category === "syrup")),
        },
    ];
    const [activeTab, setActiveTab] = useState(0);
    const tabItems = tabs.map((value, index) => (
        <Tab
            activeChanger={() => setActiveTab(index)}
            dataChanger={value.onclick}
            tabTitle={value.name}
            isActive={activeTab === index}
        />
    ));
    return <div className={styles.container}>{tabItems}</div>;
};

export default MenuTabBar;