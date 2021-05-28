import React from 'react';
import {FieldProps} from './FieldPropType';

export const LoginField = (props: FieldProps): JSX.Element => {
  const {input, meta} = props;

  const errorColor: React.CSSProperties = {};
  const errorBorder: React.CSSProperties = {};
  if (meta.error && meta.touched) {
    errorColor.color = 'red';
    errorBorder.borderColor = 'red';
  }

  return (<div className='formField'>
    <label style={errorColor}>Login</label>
    <input {...input} type="text" placeholder="Login" style={errorBorder}/>
  </div>);

};
