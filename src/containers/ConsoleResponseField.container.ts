import {State} from "../config/State";
import {connect} from "react-redux";
import {ConsoleResponseField} from "../components/console/ConsoleFields/ConsoleResponseField";

const mapStateToProps = (state: State) => {
    return {
        response: state.console.response,
    };
};

const connector = connect(mapStateToProps);
const connectedComponent = connector(ConsoleResponseField);

export { connectedComponent as ConsoleResponseFieldContainer };