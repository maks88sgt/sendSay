import React from "react";
import {FieldProps} from "../../login/loginFields/FieldPropType";

export const ConsoleResponseField = (props: FieldProps): JSX.Element => {
    const {input, meta} = props;

    const errorColor: React.CSSProperties = {};
    const errorBorder: React.CSSProperties = {};
    if (meta.error && meta.touched) {
        errorColor.color = 'red';
        errorBorder.borderColor = 'red';
    }

    return (<>
        <span style={errorColor} className={'consoleBody_rightPart_label'}>Response</span>
        <textarea {...input} className={'consoleBody_rightPart_textarea'}/>
    </>);
};