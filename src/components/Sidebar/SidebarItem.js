import styles from "./SidebarItem.module.css";
import {Link, NavLink} from "react-router-dom";

function SidebarItem({text, active, link}) {
    console.log(active)
    return (
        <div className={active ? styles.sidebarItemActive : styles.sidebarItem}>
            <NavLink to={link} className={styles.NavLink}>
                <p className={active ? styles.sidebarItemActive__text : styles.sidebarItem__text}>
                    {text}
                </p>
            </NavLink>
        </div>
    )
}

export default SidebarItem;