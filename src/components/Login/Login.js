import styles from "./Login.module.css"
import {NavLink, Navigate, useLocation} from "react-router-dom";
import logo from "../../images/logo.svg";
import {useEffect, useState} from "react";
import verifyUser from "../../verifyUser";


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
    const [auth, setAuth] = useState(false);
    let path = location.state?.from;

    if (path === null || path === undefined || !path) {
        path = '/home';
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const data = {
        username: event.target.elements.name.value,
        password: event.target.elements.password.value
        }
        let token;
        token = await loginUser(data).catch(err => token = {token: 'error'});
        if (token.token !== 'error') localStorage.setItem('token', token.token);
        else return <Navigate to={'/login'} state={{from: path, auth: false}}/>
    }
    useEffect(() => {
        async function getAuth() {
                const res = await verifyUser(localStorage.getItem('token'));
                setAuth(res !== null && res !== undefined && res);
        }

        getAuth().then(r => r);
    })
    if (auth) {
        return <Navigate to={path} state={{from: path, auth: true}}/>
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