import styles from "./BasketPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Basket from "../../components/Basket/Basket.js";
import jwt_decode from "jwt-decode";
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest";


const defaultUser = {
    username: "username",
    name: "name",
    type: "none",
    place: "D1",
    achievements: [],
    karma: 3,
}

async function PostOrder(data, API_URL) {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

function BasketPage() {
    const [user, setUser] = useState(defaultUser)
    const token = localStorage.getItem("token")
    useState(async () => {
        if (token) {
            let decoded = jwt_decode(token);
            let username = decoded.username;
            await GetRequest(defaultUser, setUser, `http://localhost:8000/api/user/${username}`)
            console.log(user)
        }
    })

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
            place: "D1",
            user: user.username
        }
        sessionStorage.removeItem('basket')
        sessionStorage.removeItem('sum')
        await PostOrder(data, "http://localhost:8000/api/order/")
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