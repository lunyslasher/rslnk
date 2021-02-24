import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SettingsPage } from "./pages/SettingsPage";
import { HomePage } from "./pages/HomePage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/settings">
                <SettingsPage />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};
