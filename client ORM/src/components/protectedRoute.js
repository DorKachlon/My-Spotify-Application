import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
export default function ProtectedRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (Cookies.get("token")) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
}
