import React from "react";
import {ConsolePageHeaderContainer} from "../../containers/ConsolePageHeader.container";
import {ConsolePageConsoleContainer} from "../../containers/ConsolePageConsole.container";
import {ConsolePageHistoryContainer} from "../../containers/ConsolePageHistory.container";

export const ConsolePage = () => {

    return (
        <>
           <ConsolePageHeaderContainer/>
            <ConsolePageHistoryContainer/>
            <ConsolePageConsoleContainer/>
        </>
    );
}