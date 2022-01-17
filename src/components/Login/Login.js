import styles from "./Login.module.css"
import {NavLink} from "react-router-dom";
import logo from "../../images/logo.svg";

function onSubmit(event) {
    event.preventDefault();
    const data = {
        username: event.target.elements.name.value,
        password: event.target.elements.password.value
    }
    fetch('http://localhost:8000/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.status === 200) {
                res.json().then((res) => {
                    console.log(res);
                    localStorage.setItem("token", res.token);
                })
            }
        })
        .catch(err => {
            console.error(err);
            alert(err)
        });
}

function Login() {
    return (
        <div className={styles.login}>
            <NavLink to="/home" className={styles.login__logo}>
                <img src={logo} className={styles.login__logo} alt={'logo'}/>
            </NavLink>
            <form className={styles.login__form} onSubmit={onSubmit}>
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
                <button type="submit" className={styles.login__form_button}>
                    Войти
                </button>
            </form>
            <NavLink to="/register" className={styles.login__link}>Ещё нет аккаунта? Зарегестрироваться!</NavLink>
        </div>
    )
}

export default Login