import {Redirect, Route} from "react-router-dom";
import React from "react";
import {AppRouterPropsType} from "./AppRouter";
import {ConsolePageContainer} from "../../containers/ConsolePage.container";

export type PrivateRoutePropsType = {
    sessionKey: string;
}

export const PrivateRoute = (props: PrivateRoutePropsType)=> {
    const { sessionKey } = props;
    return (
       <Route render={({ location }) =>
           sessionKey ? (
               <ConsolePageContainer/>
           ) : (
               <Redirect
                   to={{
                       pathname: "/login",
                       state: { from: location }
                   }}
               />
           )
       }/>
   );
}