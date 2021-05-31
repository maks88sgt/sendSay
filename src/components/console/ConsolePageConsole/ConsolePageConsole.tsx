import {Resizable} from "re-resizable";
import React, {useState} from "react";
import {Field, Form} from "react-final-form";
import dots from "../../../icons/dots.svg";
import { Button } from "../../../shared/styledComponents/styledComponents";
import format from "../../../icons/format.svg";
import {composeValidators, JSONValidator, requiredValidator} from "../../../utils/fieldValidators";
import { JSONformater } from "../../../utils/JSONformater";
import loader from "../../../icons/loader.svg";
import {
    ConsoleResponseFieldContainer
} from "../../../containers/ConsoleResponseField.container";
import {ConsoleRequestField} from "../ConsoleFields/ConsoleRequestField";

export type ConsolePageConsolePropsType = {
    isFetching: boolean;
    request: null | string;
    response: null | string;
    sendRequest: (request: string) => void;
}

export const ConsolePageConsole = (props: ConsolePageConsolePropsType) => {
    const {isFetching, request, response, sendRequest } = props;

    const sendLabel = isFetching ? <img src={loader} alt='Loader'/> : 'Send';

    return (
        <Form onSubmit={(values) => sendRequest(values.request)}
              initialValues={{request, response}}
              render={({handleSubmit, form, values , initialValues }) => (
                  <form onSubmit={handleSubmit}>
                      <div className={'consoleBody'}>
                          <Resizable
                              className={'consoleBody_leftPart'}
                              defaultSize={{
                                  width: '50%',
                                  height: '',
                              }}
                              maxWidth="100%"
                              minWidth="1"
                          >
                              <Field name="request"
                                     component={ConsoleRequestField}
                                     initialValue = {request}
                                     validate={composeValidators(requiredValidator, JSONValidator)}/>
                          </Resizable>
                          <div className={'consoleBody_rightPart_separator'}><img src={dots}/></div>
                          <div className={'consoleBody_rightPart'}>
                              <Field name="response"
                                     component={ConsoleResponseFieldContainer}/>
                          </div>
                      </div>
                      <div className={'consoleFooter'}>
                          <Button>
                              {sendLabel}
                          </Button>
                          <span className={'consoleFooter_formatter'} onClick={()=> {
                              form.reset({request: JSONformater(values.request)});
                          }}><img src={format} alt='format'/>Reformat</span>
                      </div>
                  </form>
              )}/>
    );
}

