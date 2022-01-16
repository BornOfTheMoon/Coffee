import styles from "./Profile.module.css"
import UserCard from "../UserCard/UserCard";
import Achievements from "../Achievements/Achievements";

const user = {
    username: "username",
    name: "name",
    type: "employee",
    place: "D1",
    achievements: [
        {
            name: "Уже смешарик",
            description: "купить 10 напитков"
        },
        {
            name: "Новичок",
            description: "купить кофе с 3 сиропами"
        }
    ],
    karma: [true, true, true, true],
}

function Profile() {
    return (
        <div className={styles.profile}>
            <UserCard user={user}/>
            <Achievements user={user}/>
        </div>
    )
}

export default Profile