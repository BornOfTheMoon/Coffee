import styles from "./ProfilePage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "../../components/Profile/Profile";
import jwt_decode from 'jwt-decode';
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest";


function ProfilePage({user, setUser, defaultUser}) {
    if (user.type === "none") {
        const token = localStorage.getItem("token")
        if (token) {
            let decoded = jwt_decode(token);
            let username = decoded.username

            useState(async () => {
                await GetRequest(defaultUser, setUser, `http://localhost:8000/api/user/${username}`)
                console.log(user)
            })
        }
    }

    return (
        <div className={styles.profilePage}>
            <Sidebar item="profile"/>
            <Profile user={user}/>
        </div>
    )
}

export default ProfilePage