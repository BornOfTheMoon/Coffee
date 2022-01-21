import styles from "./BasketPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Basket from "../../components/Basket/Basket.js";


function confirmNote(event) {
    event.preventDefault()
    const note = event.target.elements.notion.value
    sessionStorage.setItem("note", note)
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

function BasketPage({user}) {
    async function toOrders() {
        const sum = sessionStorage.getItem("sum")
        const basket = sessionStorage.getItem("basket")
        if (!user.karma) {
            alert("Вы не можете делать заказы")
            return
        }
        if (!basket) {
            return
        }
        let order = basket.split(" ")
        const note = sessionStorage.getItem("note")
        const data = {
            price: +sum,
            products: order,
            place: "D1",
            user: user.username,
            note: note
        }
        console.log(data)
        sessionStorage.removeItem('basket')
        sessionStorage.removeItem('sum')
        sessionStorage.removeItem('note')
        await PostOrder(data, "http://localhost:8000/api/order/")
    }

    return (
        <div className={styles.basketPage}>
            <Sidebar item="basket" user={user}/>
            <div className={styles.basketPage__content}>
                <Basket createOrder={toOrders}/>
                <form onSubmit={(event)=> {
                    confirmNote(event)
                }}>
                    <input
                        placeholder="Если в заказе есть сироп, укажите, пожалуйста, в какой кофе его добавлять"
                        type="text"
                        id="notion"
                        className={styles.basketPage__input}
                    />
                    <button className={styles.basketPage__button}>Подтвердить</button>
                </form>
            </div>
        </div>
    )
}

export default BasketPage