import styles from "./AchievementsItem.module.css"

function AchievementsItem({name, description}) {
    return (
        <div className={styles.achievementsItem}>
            <p className={styles.achievementsItem__name}>{name}</p>
            <p className={styles.achievementsItem__description}>{description}</p>
        </div>
    )
}

export default AchievementsItem