import styles from "./UserOrdersPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import UserOrders from "../../components/UserOrders/UserOrders";
import jwt_decode from "jwt-decode";
import {GetRequest} from "../../api/GetRequest";
import {useState} from "react";


function UserOrdersPage({user, setUser, defaultUser}) {
    if (user.type === "none") {
        const token = localStorage.getItem("token")
        if (token) {
            const decoded = jwt_decode(token);
            let username = decoded.username

            useState(async () => {
                await GetRequest(defaultUser, setUser, `http://localhost:8000/api/user/${username}`)
            })
        }
    }

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
