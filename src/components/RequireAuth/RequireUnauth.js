import verifyUser from "../../verifyUser";
import {Navigate} from "react-router";
import {useEffect, useState} from "react";
import {cleanup} from "@testing-library/react";

function RequireUnauth({ children }) {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    async function getUser() {
        try {
            const user = await verifyUser(localStorage.getItem('token'));
            setUser(user);
        } catch (e) {
            setError(e);
        }
    }

    useEffect(() => {
        getUser().then(r => r);

        return cleanup();
    }, [])
    console.log(user);

    if (user !== null && user !== undefined && user) {
        return <Navigate to="/home"/>;
    }

    return children;
}

export default RequireUnauth