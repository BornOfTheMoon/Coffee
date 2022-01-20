import styles from "./LoginPage.module.css"
import UniversalContent from "../../components/UniversalContent/UniversalContent";
import {NavLink} from "react-router-dom";
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

function LoginPage({auth, setAuthorised, path, setPath}) {
    const handleSubmit = async event => {
        event.preventDefault();
        const data = {
            username: event.target.elements.name.value,
            password: event.target.elements.password.value
        }
        let token;
        token = await loginUser(data).catch(err => token = {token: 'error'});
        if (token.token !== 'error') {
            auth = true;
            setAuthorised(auth);
            localStorage.setItem('token', token.token);
        }
    }
    return (
        <div className={styles.loginPage}>
            <div className={styles.login}>
                <NavLink to="/home" className={styles.login__logo}>
                    <img src={logo} className={styles.login__logo} alt="logo"/>
                </NavLink>
                <form className={styles.login__form} onSubmit={handleSubmit}>
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
                    <button type="submit" className={styles.login__form_button}>
                        Войти
                    </button>
                </form>
                <NavLink to="/register" className={styles.login__link}>Ещё нет аккаунта? Зарегестрироваться!</NavLink>
            </div>
            <UniversalContent className={styles.loginPage__content}/>
        </div>
    )
}

export default LoginPage