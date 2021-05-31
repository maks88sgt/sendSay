import React, {useCallback, useEffect, useRef, useState} from 'react';
import dots from './../../../icons/dots.svg';
import red from './../../../icons/red.svg';
import green from './../../../icons/green.svg';
import {HistoryItemDropdown} from "./HistoryItemDropdown";
import ReactDOM from 'react-dom';
import {Portal} from "./Portal";

export type HistoryItemPropsType = {
    name: string;
    success:boolean;
    index: number;
}

export const HistoryItem = (props: HistoryItemPropsType) => {
    const { name, success, index } = props;

    const ref = useRef(null);

    useEffect(() => {
        document.body.addEventListener("click", event => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setIsDropdownOpen(false);
        });
        document.body.addEventListener("scroll", () => {
            setIsDropdownOpen(false);
        });
    }, [])

    const [ isDropDownOpen, setIsDropdownOpen ] = useState(false);
    const [ dropDownCoords, setDropDownCoords ] = useState({left: 0, top: 0});
    const [ dropDownWidth, setDropDownWidth ] = useState(0);

    function handleDropDownClick(event) {
        setIsDropdownOpen(!isDropDownOpen);
        if (ref.current) {
            setDropDownWidth(ref.current.offsetWidth );
            const coords = ref.current.getBoundingClientRect();
            setDropDownCoords({left: coords.left - 25, top: coords.top + coords.height});
        }

    }

    return (<div ref={ref} className={`historyItem_container`}
                 onClick={(event)=> handleDropDownClick(event)}>
        <div className={`historyItem--${index}`}>
            <div className={`historyItem`}>
                <img src={success ? green : red}/>
                <div className={'historyItem_name'}>{name}</div>
                <img src={dots} alt={'actions'}/>
                {isDropDownOpen && <Portal querySelector={`.historyItem--${index}`}>
                    <HistoryItemDropdown dropDownCoords={dropDownCoords} dropDownWidth={dropDownWidth}/>
                </Portal>
                }
            </div>

        </div>

    </div>);

}