import styles from "./ProfilePage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "../../components/Profile/Profile";
import jwt_decode from 'jwt-decode';
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest";
import {Navigate} from "react-router";


const defaultUser = {
    username: "username",
    name: "name",
    type: "none",
    place: "D1",
    achievements: [],
    karma: 3,
}

function ProfilePage({setAuth}) {
    const [user, setUser] = useState(defaultUser)
    const token = localStorage.getItem("token")
    useState(async () => {
        if (token) {
            let decoded = jwt_decode(token);
            let username = decoded.username;
            await GetRequest(defaultUser, setUser, `http://localhost:8000/api/user/${username}`)
            console.log(user)
        }
    })

    function Logout() {
        setAuth(false);
        localStorage.removeItem('token');
        return <Navigate to={"/home"}/>
    }


    return (
        <div className={styles.profilePage}>
            <Sidebar item="profile"/>
            <Profile user={user}/>
            <p onClick={Logout}>Log Out</p>
        </div>
    )
}

export default ProfilePage