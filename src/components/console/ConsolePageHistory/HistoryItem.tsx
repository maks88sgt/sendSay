import React from 'react';
import dots from './../../../icons/dots.svg';
import red from './../../../icons/red.svg';
import green from './../../../icons/green.svg';

export const HistoryItem = (props) => {
    const { name, success } = props;

    return (<div className={'historyItem'}>
        <img src={success ? green : red}/>
        <div className={'historyItem_name'}>{name}</div>
        <img src={dots} alt={'actions'}/>
    </div>);

}