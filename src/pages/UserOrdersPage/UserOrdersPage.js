import styles from "./UserOrdersPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import UserOrders from "../../components/UserOrders/UserOrders";
import jwt_decode from "jwt-decode";
import {GetRequest} from "../../api/GetRequest";
import {useState} from "react";

const defaultUser = {
    username: "username",
    name: "name",
    type: "employee",
    place: "D1",
    achievements: [],
    karma: 3,
    orders: []
}

const defaultOrder = [
    {
        products: ["aaa"],
        price: 200,
        status: "wait"
    },
    {
        products: ["ccc", "ddd"],
        price: 200,
        status: "wait"
    },
    {
        products: ["aaa", "bbb", "ccc", "ddd"],
        price: 200,
        status: "wait"
    },

]

function UserOrdersPage() {
    const [user, setUser] = useState(defaultUser)
    // const [order, setOrder] = useState(defaultOrder)
    const token = localStorage.getItem("token")
    const decoded = jwt_decode(token);
    let username = decoded.username

    useState(async () => {
        await GetRequest(defaultUser, setUser, `http://localhost:8000/api/user/${username}`)
    })

    // useState(async ()=> {
    //     await GetRequest(defaultOrder, setOrder, `http://localhost:8000/api/order/user/${username}`)
    // })
    //
    // console.log(order)

    const orders = user.orders

    return (
        <div className={styles.userOrdersPage}>
            <Sidebar item="orders"/>
            <div className={styles.userOrdersPage__content}>
                <UserOrders orders={orders}/>
            </div>
        </div>
    )
}

export default UserOrdersPage
