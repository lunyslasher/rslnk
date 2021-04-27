import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import App from "./pages/App";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/">
                <App />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};
