import React from "react";
import {ConsolePageHeaderContainer} from "../../containers/ConsolePageHeader.container";
import {ConsolePageConsole} from "./ConsolePageConsole/ConsolePageConsole";

export const ConsolePage = () => {

    return (
        <>
           <ConsolePageHeaderContainer/>
            <ConsolePageConsole/>
        </>
    );
}