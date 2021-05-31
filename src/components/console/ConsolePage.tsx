import React from "react";
import {ConsolePageHeaderContainer} from "../../containers/ConsolePageHeader.container";
import {ConsolePageConsoleContainer} from "../../containers/ConsolePageConsole.container";
import {ConsolePageHistory} from "./ConsolePageHistory/ConsolePageHystory";

export const ConsolePage = () => {

    return (
        <>
           <ConsolePageHeaderContainer/>
            <ConsolePageHistory/>
            <ConsolePageConsoleContainer/>
        </>
    );
}