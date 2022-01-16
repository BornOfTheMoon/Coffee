import styles from "./LoginPage.module.css"
import UniversalContent from "../../components/UniversalContent/UniversalContent";
import Login from "../../components/Login/Login";

function HomePage() {
    return (
        <div className={styles.loginPage}>
            <Login item=""/>
            <UniversalContent className={styles.loginPage__content}/>
        </div>
    )
}

export default HomePage