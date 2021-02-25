import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/">
                <HomePage />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};
