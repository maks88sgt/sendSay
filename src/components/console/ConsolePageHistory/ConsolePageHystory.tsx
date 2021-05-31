import React from 'react';
import cross from './../../../icons/cross.svg'
import {HistoryItem} from "./HistoryItem";

export const ConsolePageHistory = ()=> {
    const items = [{name: 'apt.get', success: true}, {name: 'console.ini', success: false}, {name: 'console.ini', success: false}, {name: 'console.ini', success: false},{name: 'console.ini', success: false},{name: 'console.ini', success: false},{name: 'console.ini', success: false},{name: 'console.ini', success: false},{name: 'console.ini', success: false},{name: 'console.ini', success: false},{name: 'console.ini', success: false},{name: 'console.ini', success: false},{name: 'console.ini', success: false},];
    return (<div className={'consoleHistory'}>
        <div className={'consoleHistory_list'}>
            {items.map(item => <HistoryItem key={item.name} {...item}/>)}
        </div>

        <div className={'consoleHistory_clearButton'}><div/><img src={cross}/></div>
    </div>)
}