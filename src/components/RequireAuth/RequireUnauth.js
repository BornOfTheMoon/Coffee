import {Navigate} from "react-router";
import React from "react";

function RequireUnauth({ auth, setAuthorised, path, children }) {
    if (auth) {
        return <Navigate to={path}/>;
    }

    return React.cloneElement(children, {auth: auth, setAuthorised: setAuthorised});
}

export default RequireUnauth