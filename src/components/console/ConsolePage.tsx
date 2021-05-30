import React from "react";
import logo from './../../icons/logo.svg';
import logOutIcon from './../../icons/log-out.svg';
import fullScreen from './../../icons/full-screen.svg';

export type ConsolePagePropsType = {
    login: string | null;
    sublogin: string | null;
    logOut: () => void;
};

export const ConsolePage = (props: ConsolePagePropsType) => {
    const {login, sublogin, logOut } = props;

    return (
        <>
            <div className='consoleHeader'>
                <div className='consoleHeader_leftBlock'>
                    <span><img src={logo} alt='logo'/></span>
                    <span className='loginFormHeader'>API-console</span>
                </div>
                <div className='consoleHeader_rightBlock'>
                    <span className='consoleHeader_loginLabel' >{login} : {sublogin ? sublogin : 'sublogin'}</span>
                    <span onClick={()=>logOut()}>Log out<img src={logOutIcon} alt='log out'/></span>
                    <span><img src={fullScreen} alt='toggle full screen mode'/></span>
                </div>
            </div>
            <div>Console page</div>
        </>
    );
}