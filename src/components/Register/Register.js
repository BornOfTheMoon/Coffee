import styles from "./Register.module.css"
import {NavLink} from "react-router-dom";
import logo from "../../images/logo.svg";


function onSubmit(event) {
    event.preventDefault();
    const data = {
        username: event.target.elements.name.value,
        password: event.target.elements.password.value,
        passwordAgain: event.target.elements.duplicatePassword.value
    }
    fetch('http://localhost:8000/api/register', {
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
                })
            } else {
                console.log(res);
            }
        })
        .catch(err => {
            console.error(err);
            alert(err)
        });
}


function Register() {
    return (
        <div className={styles.register}>
            <NavLink to="/home" className={styles.register__logo}>
                <img src={logo} className={styles.register__logo} alt="logo"/>
            </NavLink>
            <form className={styles.register__form} onSubmit={onSubmit}>
                <input
                    placeholder="Введите логин"
                    type="text"
                    id="name"
                />
                <input
                    placeholder="Введите пароль"
                    type="password"
                    id="password"
                />
                <input
                    placeholder="Повторите пароль"
                    type="password"
                    id="duplicatePassword"
                />
                <button type="submit" className={styles.register__form_button}>
                    Зарегестрироваться
                </button>
            </form>
            <NavLink to="/login" className={styles.register__link}>Уже есть аккаунт? Войти!</NavLink>
        </div>
    )
}

export default Register