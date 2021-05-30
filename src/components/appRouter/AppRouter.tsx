import {Redirect, Route, Switch} from "react-router-dom";
import {LoginPageContainer} from "../../containers/LoginPage.container";
import React from "react";
import {PrivateRouteContainer} from "../../containers/PrivateRoute.container";
import {PrivateRoute} from "./PrivateRoute";
import {ConsolePageContainer} from "../../containers/ConsolePage.container";

export type AppRouterPropsType = {
    sessionKey: string;
};

export const AppRouter = (props: AppRouterPropsType) => {
    const { sessionKey } = props;
    return (
            <Switch>
                <Route path="/login">
                    {sessionKey ? <Redirect to='/console'/> : <LoginPageContainer/>}
                </Route>
                <Route path="/console">
                    {sessionKey ?  <ConsolePageContainer/> : <Redirect to='/login'/>}
                </Route>
                <PrivateRouteContainer/>
                <Route path="*">
                    <Redirect to='/login'/>
                </Route>
            </Switch>
    );
}