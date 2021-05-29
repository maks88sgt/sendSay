import React from 'react';
import {Field, Form} from 'react-final-form';
import logo from '../../icons/logo.svg';
import loader from '../../icons/loader.svg';
import {Button} from './LoginPage.components';
import {LoginField, SubLoginField} from './loginFields';
import {PasswordField} from './loginFields/PasswordField';
import {
  composeValidators, loginValidator, passwordValidator, requiredValidator,
} from '../../utils/fieldValidators';
import {LoginFailure} from './loginFailure/LoginFailure';

export const LoginPage = props => {
    const { isLoading, tryLogIn, loginError } = props;
    const loginLabel = isLoading ? <img src={loader} alt='Loader'/> : 'Login';
    const error = loginError ? <LoginFailure loginError={loginError}/> : null;

  return (<div className='main'>
    <div className='loginLogo'>
      <img src={logo} alt="logo"/>
    </div>
    <div className='loginForm'>
      <div className='loginFormHeader'>API-console</div>
        {error}
      <Form onSubmit={(values) => {
          tryLogIn(values);
      }}
        render={({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Field name="login"
              component={LoginField}
              validate={composeValidators(loginValidator, requiredValidator)}
            />
            <Field name="sublogin"
              component={SubLoginField}/>
            <Field name="password"
              component={PasswordField}
              validate={composeValidators(passwordValidator, requiredValidator)}
            />
            <Button type="submit">
              {loginLabel}
            </Button>
          </form>)}>
      </Form>
    </div>
  </div>);
};