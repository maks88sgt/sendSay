import React from "react";
import meh from '../../icons/meh.svg';

import { LoginFailureComponent } from "./LoginPage.components";

export const LoginFailure = (props) => {
    return (
        <LoginFailureComponent>
            <img className='failureIcon' src={meh} alt='error'/>
            <div>
                <div>Login failure</div>
                <span>'{'props.error'}'</span>
            </div>
        </LoginFailureComponent>);
}