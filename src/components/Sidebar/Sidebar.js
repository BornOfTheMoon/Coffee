import logo from "../../images/logo.svg"
import SidebarItem from "./SidebarItem.js"
import styles from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const userData = [{text: "меню", type: "menu"},
                {text: "корзина", type: "basket"},
                {text: "личный кабинет", type: "profile"},
                {text: "мои заказы", type: "orders"}]
const employeeData = [{text: "меню", type: "menu"},
                    {text: "корзина", type: "basket"},
                    {text: "личный кабинет", type: "profile"},
                    {text: "мои заказы", type: "orders"},
                    {text: "текущие заказы", type: "cur_orders"}]
const managerData = [{text: "меню", type: "menu"},
                    {text: "корзина", type: "basket"},
                    {text: "личный кабинет", type: "profile"},
                    {text: "мои заказы", type: "orders"},
                    {text: "сотрудники", type: "employees"},
                    {text: "добавить товар", type: "add_product"}]

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
            <NavLink to="/home" className={styles.sidebar__logo}>
                <img src={logo} className={styles.sidebar__logo}/>
            </NavLink>
             <div className={styles.sidebar__content}>
                {options.map((option)=> <SidebarItem text={option.text}
                                                  active={(option.type === item)}
                                                    link={"/" + option.type}/>)}
             </div>
             <div className={styles.sidebar__footer}>
                 <div className={styles.sidebar__footer_places}>
                     <p className={styles.sidebar__footer_places_title}>Точки работы:</p>
                     <p className={styles.sidebar__footer_places_text}>Корпус D 5, 7 этажи</p>
                     <p className={styles.sidebar__footer_places_text}>Корпус A 6 этаж</p>
                 </div>
                 <div className={styles.sidebar__footer_time}>
                     <p className={styles.sidebar__footer_time_title}>Вечерние скидки:</p>
                     <p className={styles.sidebar__footer_time_text}>пн-пт: 18:00-22:00</p>
                     <p className={styles.sidebar__footer_time_text}>сб: 18:00-22:00</p>
                     <p className={styles.sidebar__footer_time_text}>вс: 18:00-22:00</p>
                 </div>
             </div>
        </div>
    )
}

export default Sidebar