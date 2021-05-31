import React, {useCallback, useState} from 'react';
import dots from './../../../icons/dots.svg';
import red from './../../../icons/red.svg';
import green from './../../../icons/green.svg';
import {HistoryItemDropdown} from "./HistoryItemDropdown";
import ReactDOM from 'react-dom';

export type HistoryItemPropsType = {
    name: string;
    success:boolean;
    index: number;
}

export const HistoryItem = (props: HistoryItemPropsType) => {
    const { name, success, index } = props;

    const [width, setWidth] = useState(null);
    const div = useCallback(node => {
        if (node !== null) {
            setWidth(node.getBoundingClientRect().width);
        }
    }, []);

    const [ isDropDownOpen, setIsDropdownOpen ] = useState(false);
    const dropDown = isDropDownOpen && ReactDOM.createPortal(<HistoryItemDropdown/>, document.querySelector(`.historyItem--${index}`));

    return (<div ref={div} className={`historyItem_container`} onClick={()=>setIsDropdownOpen(!isDropDownOpen)}>
        <div className={`historyItem--${index}`}>
            <div className={`historyItem`}>
                <img src={success ? green : red}/>
                <div className={'historyItem_name'}>{name}</div>
                <img src={dots} alt={'actions'}/>
            </div>
        </div>
        {dropDown}
    </div>);

}