import styles from "./RegisterPage.module.css"
import UniversalContent from "../../components/UniversalContent/UniversalContent";
import Register from "../../components/Register/Register";

function RegisterPage() {
    return (
        <div className={styles.registerPage}>
            <Register/>
            <UniversalContent className={styles.registerPage__content}/>
        </div>
    )
}

export default RegisterPage