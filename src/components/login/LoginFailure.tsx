import React from 'react';
import meh from '../../icons/meh.svg';

import {LoginFailureComponent} from './LoginPage.components';

export const LoginFailure = (): JSX.Element => {
  return (
    <LoginFailureComponent>
      <img className='failureIcon' src={meh} alt='error'/>
      <div>
        <div>Login failure</div>
        <span>'{'props.error'}'</span>
      </div>
    </LoginFailureComponent>);
};