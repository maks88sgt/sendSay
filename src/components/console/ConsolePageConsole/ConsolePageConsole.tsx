import {Resizable} from "re-resizable";
import React from "react";
import {Field, Form} from "react-final-form";
import {ConsoleRequestField} from "../ConsoleFields/ConsoleRequestField";
import dots from "../../../icons/dots.svg";
import {ConsoleResponseField} from "../ConsoleFields/ConsoleResponseField";
import { Button } from "../../../shared/styledComponents/styledComponents";
import format from "../../../icons/format.svg";

export const ConsolePageConsole = () => {

    return (
        <Form onSubmit={(values) => console.log('OK')}
              render={({handleSubmit}) => (
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
                              <Field name="request" component={ConsoleRequestField}/>
                          </Resizable>
                          <div className={'consoleBody_rightPart_separator'}><img src={dots}/></div>
                          <div className={'consoleBody_rightPart'}>
                              <Field name="response" component={ConsoleResponseField}/>
                          </div>
                      </div>
                      <div className={'consoleFooter'}>
                          <Button>
                              Send
                          </Button>
                          <span className={'consoleFooter_formatter'}onClick={()=>console.log('formatted')}><img src={format} alt='format'/>Reformat</span>
                      </div>
                  </form>
              )}/>
    );
}