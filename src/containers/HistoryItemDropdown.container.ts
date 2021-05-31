import {Dispatch} from "redux";
import {connect} from "react-redux";
import {HistoryActions} from "../redux/history/History.actions";
import {HistoryItemDropdown} from "../components/console/ConsolePageHistory/HistoryItemDropdown";

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        deleteRequestHistoryItem: (name: string) => dispatch(HistoryActions.deleteRequestHistoryItem(name)),
    };
};

const connector = connect(null, mapDispatchToProps);
const connectedComponent = connector(HistoryItemDropdown);

export { connectedComponent as HistoryItemDropdownContainer };