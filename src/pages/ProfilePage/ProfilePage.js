import styles from "./ProfilePage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "../../components/Profile/Profile";

function ProfilePage() {
    return (
        <div className={styles.profilePage}>
            <Sidebar/>
            <Profile/>
        </div>
    )
}

export default ProfilePage