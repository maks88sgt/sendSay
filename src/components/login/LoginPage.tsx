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
import {LoginFailure} from './LoginFailure';

export const LoginPage = props => {
  const loginLabel = props.isLoading ? <img src={loader} alt='Loader'/> : 'Login';

  return (<div className='main'>
    <div className='loginLogo'>
      <img src={logo} alt="logo"/>
    </div>
    <div className='loginForm'>
      <div className='loginFormHeader'>API-console</div>
      <LoginFailure/>
      <Form onSubmit={() => console.log('OK')}
        render={({
          handleSubmit, form, submitting, pristine, values,
        }) => (
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
            <Button>
              {loginLabel}
            </Button>
          </form>)}>
      </Form>
    </div>
  </div>);
};