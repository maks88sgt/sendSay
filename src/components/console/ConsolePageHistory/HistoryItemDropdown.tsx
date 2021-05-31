import React from "react";

export const HistoryItemDropdown = () => {

    return (
        <div className={'historyItemDropdown'}>
            <span className={'historyItemDropdown--run'}>Run</span>
            <span className={'historyItemDropdown--copy'}>Copy</span>
            <span className={'historyItemDropdown--delete'}>Delete</span>
        </div>
    );
}