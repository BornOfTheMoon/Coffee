import logo from "../../images/logo.svg"
import SidebarItem from "./SidebarItem.js"
import styles from "./Sidebar.module.css"

const userData = [{text: "меню", type: "menu"},
                {text: "корзина", type: "basket"},
                {text: "личный кабинет", type: "profile"},
                {text: "мои заказы", type: "history"}]
const employeeData = [{text: "меню", type: "menu"},
                    {text: "корзина", type: "basket"},
                    {text: "личный кабинет", type: "profile"},
                    {text: "мои заказы", type: "history"},
                    {text: "текущие заказы", type: "orders"}]
const managerData = [{text: "меню", type: "menu"},
                    {text: "корзина", type: "basket"},
                    {text: "личный кабинет", type: "profile"},
                    {text: "мои заказы", type: "history"},
                    {text: "сотрудники", type: "employees"}]

const user = "user"

function Sidebar({item}) {
    let options = []
    if (user === "manager") {
        options = managerData
    } else if (user === "employee") {
        options = employeeData
    } else if (user === "user") {
        options = userData
    }
    return (
        <div className={styles.sidebar}>
             <img src={logo} className={styles.sidebar__logo}/>
             <div className={styles.sidebar__content}>
                {options.map((option)=> <SidebarItem text={option.text}
                                                  active={(option.type === item)}/>)}
             </div>
             <div className={styles.sidebar__footer}>
                 <div className={styles.sidebar__footer_places}>
                     <p>Точки работы:</p>
                     <p>Корпус D 5, 7 этажи</p>
                     <p>Корпус A 6 этаж</p>
                 </div>
                 <div className={styles.sidebar__footer_time}>
                     <p>Вечерние скидки:</p>
                     <p>пн-пт: 18:00-22:00</p>
                     <p>сб: 18:00-22:00</p>
                     <p>вс: 18:00-22:00</p>
                 </div>
             </div>
        </div>
    )
}

export default Sidebar