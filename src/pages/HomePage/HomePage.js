import Sidebar from "../../components/Sidebar/Sidebar";
import homeBackground from "../../images/homeBackground.jpg"
import styles from "./HomePage.module.css"
import UniversalContent from "../../components/UniversalContent/UniversalContent";

function HomePage() {
    return (
        <div className={styles.homePage}>
            <Sidebar item=""/>
            <UniversalContent className={styles.homePage__content}/>
        </div>
    )
}

export default HomePage