import styles from "./UserCard.module.css"
import userAvatar from "../../images/userAvatar.jpg"
import star from "../../images/star.svg"

function UserCard({user}) {
    let title = "Карточка пользователя"
    let avatar = userAvatar
    if (user.type === "employee") {
        title = "Карточка работника"
    } else if (user.type === "manager") {
        title = "Карточка менеджера"
    }

    let achievement = "Пусто :("
    if (user.achievements.length !== 0) {
        achievement = user.achievements[0].name
    }

    let workPlace = []
    if (user.type === "employee") {
        workPlace = [true]
    }

    return (
        <div className={styles.userCard}>
            <p className={styles.userCard__title}>{title}</p>
            <div className={styles.userCard__content}>
                <img src={avatar} className={styles.userCard__content_avatar}/>
                <div className={styles.userCard__content_mainInfo}>
                    <p>{user.username}</p>
                    <p>{user.name}</p>
                </div>
                <div className={styles.userCard__content_addInfo}>
                    <p>Достижение: {achievement}</p>
                    <div className={styles.userCard__content_addInfo_karma}>
                        <p>Карма:</p>
                        {user.karma.map((option)=> <img src={star}/>)}
                    </div>
                    {workPlace.map((option)=> <p>Точка работы: {user.place}</p>)}
                </div>
            </div>
        </div>
    )
}

export default UserCard