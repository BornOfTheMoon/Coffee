import styles from "./Login.module.css"

function Login() {
    return (
        <div className={styles.login}>
            <form className={styles.login__form}>
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
            <p>Ещё нет аккаунта? Зарегестрироваться!</p>
        </div>
    )
}

export default Login