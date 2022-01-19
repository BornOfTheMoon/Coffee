import styles from "./Profile.module.css"
import UserCard from "../UserCard/UserCard";
import Achievements from "../Achievements/Achievements";
import catLogo from "../../images/cat.svg"

const user = {
    username: "username",
    name: "name",
    type: "employee",
    place: "D1",
    achievements: [
        {
            name: "Новичок",
            description: "купить кофе с 3 сиропами"
        },
        {
            name: "Уже смешарик",
            description: "купить 10 напитков"
        },
    ],
    karma: [true, true, true, true],
}

function Profile() {
    return (
        <div className={styles.profile}>
            <UserCard user={user}/>
            <Achievements user={user}/>
            <img src={catLogo} className={styles.profile__catLogo} alt="cat"/>
        </div>
    )
}

export default Profile