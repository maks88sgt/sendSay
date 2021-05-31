import React from "react";

export type HistoryItemDropdownPropsType= {
    dropDownCoords: {
        top: number,
        left: number,
    };
    dropDownWidth: number;
}

export const HistoryItemDropdown = (props: HistoryItemDropdownPropsType) => {
    const { dropDownCoords, dropDownWidth } = props;

    const position = {
        width: dropDownWidth,
        top: dropDownCoords.top,
        left: dropDownCoords.left,
    }

    return (
        <div className={'historyItemDropdown'} style={position}>
            <span className={'historyItemDropdown--run'}>Run</span>
            <span className={'historyItemDropdown--copy'}>Copy</span>
            <span className={'historyItemDropdown--delete'}>Delete</span>
        </div>
    );
}