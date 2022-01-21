import styles from "./CurrentOrdersPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import CurrentOrders from "../../components/CurrentOrders/CurrentOrders";
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest";


const defaultOrders = [
    {
        price: 500,
        products: [],
        user: "badmin",
        status: "wait confirm"
    },
    {
        price: 500,
        products: [],
        user: "badmin",
        status: "wait confirm"
    },
    {
        price: 500,
        products: [],
        user: "badmin",
        status: "accepted"
    },
    {
        price: 700,
        products: [],
        user: "badmin",
        status: "finished"
    },
    {
        price: 500,
        products: [],
        user: "badmin",
        status: "accepted"
    },
    {
        price: 300,
        products: [],
        user: "badmin",
        status: "finished"
    },
]

function CurrentOrdersPage({user}) {
    const [orders, setOrders] = useState(defaultOrders)

    useState(async () => {
        await GetRequest(defaultOrders, setOrders, "http://localhost:8000/api/order")
    })

    return (
        <div className={styles.currentOrdersPage}>
            <Sidebar item={"current"} user={user}/>
            <CurrentOrders orders={orders}/>
        </div>
    )
}

export default CurrentOrdersPage
