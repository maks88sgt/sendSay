import React from "react";
import {ConsolePageHeaderContainer} from "../../containers/ConsolePageHeader.container";
import {ConsolePageConsoleContainer} from "../../containers/ConsolePageConsole.container";

export const ConsolePage = () => {

    return (
        <>
           <ConsolePageHeaderContainer/>
            <ConsolePageConsoleContainer/>
        </>
    );
}