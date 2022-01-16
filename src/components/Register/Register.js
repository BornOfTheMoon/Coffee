import styles from "./Register.module.css"

function Register() {
    return (
        <div className={styles.register}>
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
            <p>Уже есть аккаунт? Войти!</p>
        </div>
    )
}

export default Register