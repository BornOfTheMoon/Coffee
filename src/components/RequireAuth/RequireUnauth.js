import verifyUser from "../../verifyUser";
import {Navigate, useLocation} from "react-router";
import React, {useEffect, useRef, useState} from "react";

function RequireUnauth({ children }) {
    const state = useLocation().state;
    const isMountedRef = useRef(null);
    const controller = new AbortController();
    let [auth, setAuth] = useState(true);
    let [error, setError] = useState('');
    async function getAuth() {
        try {
            const res = await verifyUser(localStorage.getItem('token'));
            setAuth(res !== null && res !== undefined && res);
        } catch (e) {
            setError(e);
        }
    }

    useEffect(() => {
        if (!state) {
            isMountedRef.current = true;
            getAuth().then(r => r);
            return () => {
                isMountedRef.current = false;
                controller.abort();
            };
        }
    }, [])

    if (state) {
        if (state.auth) {
            return <Navigate to="/home" state={{auth: true}}/>;
        } else {
            return children;
        }
    }

    if (auth) {
        return <Navigate to="/home" state={{auth: true}}/>;
    }

    return children;
}

export default RequireUnauth