import styles from "./BasketPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Basket from "../../components/Basket/Basket.js";
import jwt_decode from "jwt-decode";
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest";


async function PostOrder(data, API_URL) {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

async function toOrders() {
    const sum = sessionStorage.getItem("sum")
    const basket = sessionStorage.getItem("basket")
    if (!basket) {
        return
    }
    let order = basket.split(" ")
    const data = {
        price: +sum,
        products: order,
        place: "D1"
    }
    sessionStorage.removeItem('basket')
    sessionStorage.removeItem('sum')
    await PostOrder(data, "http://localhost:8000/api/order/")
}

function BasketPage({user, setUser, defaultUser}) {
    if (user.type === "none") {
        const token = localStorage.getItem("token")
        if (token) {
            let decoded = jwt_decode(token);
            let username = decoded.username

            useState(async () => {
                await GetRequest(defaultUser, setUser, `http://localhost:8000/api/user/${username}`)
                console.log(user)
            })
        }
    }
    return (
        <div className={styles.basketPage}>
            <Sidebar item="basket"/>
            <div className={styles.basketPage__content}>
                <Basket func={toOrders}/>
            </div>
        </div>
    )
}

export default BasketPage