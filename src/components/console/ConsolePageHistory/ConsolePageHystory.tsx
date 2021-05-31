import React from 'react';
import cross from './../../../icons/cross.svg'
import {HistoryItem} from "./HistoryItem";
import {HistoryItemType} from "../../../redux/history/History.store";

export type ConsolePageHistoryPropsType = {
    historyItems: HistoryItemType[];
}

export const ConsolePageHistory = (props: ConsolePageHistoryPropsType)=> {
    const { historyItems } = props;
    return (<div className={'consoleHistory'}>
        <div className={'consoleHistory_list'}>
            {Array.isArray(historyItems) && historyItems.map((item, index) => <HistoryItem key={item.name} index={index} name={item.name as string} success={item.success}/>)}
        </div>

        <div className={'consoleHistory_clearButton'}><div/><img src={cross}/></div>
    </div>)
}