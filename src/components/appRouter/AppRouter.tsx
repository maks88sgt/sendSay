import {Redirect, Route, Switch} from "react-router-dom";
import {LoginPageContainer} from "../../containers/LoginPage.container";
import React from "react";
import {ConsolePage} from "../console/ConsolePage";

export const AppRouter = (props) => {
    const { authSuccess } = props;
    return (
        <Switch>
            <Route exact path="/login">
                {authSuccess ? <Redirect to='/console'/> : <LoginPageContainer/>}
            </Route>
            <Route exact path="/console">
                {!authSuccess ? <Redirect to='/login'/> : <ConsolePage/>}
            </Route>
            <Route path="*">
                <Redirect to='/login'/>
            </Route>

        </Switch>);
}