import React from "react";
import {HistoryItemType} from "../../../redux/history/History.store";

export type HistoryItemDropdownPropsType= {
    dropDownCoords: {
        top: number,
        left: number,
    };
    dropDownWidth: number;
    name: string;
    deleteRequestHistoryItem:(item: HistoryItemType) => void;

}

export const HistoryItemDropdown = (props: HistoryItemDropdownPropsType) => {
    const { dropDownCoords, dropDownWidth, name, deleteRequestHistoryItem } = props;

    const position = {
        width: dropDownWidth,
        top: dropDownCoords.top,
        left: dropDownCoords.left,
    }

    return (
        <div className={'historyItemDropdown'} style={position}>
            <span className={'historyItemDropdown--run'}>Run</span>
            <span className={'historyItemDropdown--copy'}>Copy</span>
            <span onClick={()=>deleteRequestHistoryItem(name)} className={'historyItemDropdown--delete'}>Delete</span>
        </div>
    );
}