import React from "react";
import { FieldProps } from "./FieldPropType";
import {FieldRenderProps} from "react-final-form";

export const PasswordField = (props: FieldProps) => {
    const { input, meta } = props;

    const errorColor:  React.CSSProperties = {};
    const errorBorder: React.CSSProperties = {};
    if (meta.error && meta.touched) {
        errorColor.color = "red";
        errorBorder.borderColor = "red";
    }

    return (<div className='formField'>
            <label style={errorColor}>Password</label>
            <input {...input} type="password" placeholder="Password" style={errorBorder} />
        </div>
    );

}
