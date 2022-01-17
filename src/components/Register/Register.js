import styles from "./Register.module.css"
import {NavLink} from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
    return (
        <div className={styles.register}>
            <NavLink to="/home" className={styles.register__logo}>
                <img src={logo} className={styles.register__logo}/>
            </NavLink>
            <form className={styles.register__form}>
                <input
                    placeholder="Введите логин"
                    type="text"
                    id="name"
                />
                <input
                    placeholder="Введите пароль"
                    type="text"
                    id="password"
                />
                <input
                    placeholder="Повторите пароль"
                    type="text"
                    id="duplicate_password"
                />
                <button type="submit" className={styles.register__form_button}>
                    Войти
                </button>
            </form>
            <NavLink to="/login" className={styles.register__link}>Уже есть аккаунт? Войти!</NavLink>
        </div>
    )
}

export default Register