import React from "react";
import {FieldProps} from "../../login/loginFields/FieldPropType";
import {JSONformater} from "../../../utils/JSONformater";

export type ConsoleResponseFieldPropsType = {
    response: null | string;
    meta: {
        error: string,
        touched: boolean,
    };
}

export const ConsoleResponseField = (props: ConsoleResponseFieldPropsType): JSX.Element => {
    const {response, meta} = props;

    const errorColor: React.CSSProperties = {};
    const errorBorder: React.CSSProperties = {};
    if (meta.error && meta.touched) {
        errorColor.color = 'red';
        errorBorder.borderColor = 'red';
    }

    return (<>
        <span style={errorColor} className={'consoleBody_leftPart_label'}>Request</span>
        <textarea style={errorBorder} className={'consoleBody_leftPart_textarea'}>{JSONformater(response)}</textarea>
    </>);
};