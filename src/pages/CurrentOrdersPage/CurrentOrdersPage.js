import styles from "./CurrentOrdersPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import CurrentOrders from "../../components/CurrentOrders/CurrentOrders";


const orders = [
    {
        price: 500,
        products: ["aaa", "bbb"],
        user: "badmin",
        status: "wait confirm"
    },
    {
        price: 500,
        products: ["aaa", "bbb"],
        user: "badmin",
        status: "wait confirm"
    },
    {
        price: 500,
        products: ["aaa", "bbb"],
        user: "badmin",
        status: "accepted"
    },
    {
        price: 700,
        products: ["aaa", "bbb"],
        user: "badmin",
        status: "finished"
    },
    {
        price: 500,
        products: ["aaa", "bbb"],
        user: "badmin",
        status: "accepted"
    },
    {
        price: 300,
        products: ["aaa", "bbb"],
        user: "badmin",
        status: "finished"
    },
]

function CurrentOrdersPage() {
    return (
        <div className={styles.currentOrdersPage}>
            <Sidebar/>
            <CurrentOrders orders={orders}/>
        </div>
    )
}

export default CurrentOrdersPage
