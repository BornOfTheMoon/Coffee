import styles from "./Login.module.css"
import {NavLink, useNavigate, Navigate} from "react-router-dom";
import logo from "../../images/logo.svg";


async function loginUser(data) {
    return fetch('http://localhost:8000/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        const data = {
        username: event.target.elements.name.value,
        password: event.target.elements.password.value
        }
        const token = await loginUser(data);
        localStorage.setItem('token', token.token);
        navigate(token.redirect);
    }

    if (localStorage.getItem('token')) {
        return <Navigate to={"/home"}/>
    }

    return (
        <div className={styles.login}>
            <NavLink to="/home" className={styles.login__logo}>
                <img src={logo} className={styles.login__logo} alt={'logo'}/>
            </NavLink>
            <form className={styles.login__form} onSubmit={handleSubmit}>
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