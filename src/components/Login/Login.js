import styles from "./Login.module.css"
import {NavLink, Navigate, useLocation} from "react-router-dom";
import logo from "../../images/logo.svg";
import LoginPage from "../../pages/LoginPage/LoginPage";


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
    const location = useLocation();
    console.log(location.state);
    const path = location.state.from;
    const handleSubmit = async event => {
        event.preventDefault();
        const data = {
        username: event.target.elements.name.value,
        password: event.target.elements.password.value
        }
        let token;
        token = await loginUser(data).catch(err => token = {token: 'error'});
        if (token.token !== 'error') localStorage.setItem('token', token.token);
        else return <Navigate to={'/login'} state={{from: path, children: <LoginPage/>}}/>
    }
    if (localStorage.getItem('token')) {
        return <Navigate to={path === '/login'}/>
    } else return (
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