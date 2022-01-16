import styles from "./SidebarItem.module.css";

function SidebarItem({text, active}) {
    console.log(active)
    return (
        <div className={active ? styles.sidebarItemActive : styles.sidebarItem}>
            <h2 className={active ? styles.sidebarItemActive__text : styles.sidebarItem__text}>{text}</h2>
        </div>
    )
}

export default SidebarItem;