import {State} from "../config/State";
import {ConsolePageHeader, ConsolePageHeaderPropsType} from "../components/console/ConsolePageHeader/ConsolePageHeader";
import {Dispatch} from "redux";
import {AuthActions} from "../redux/auth/Auth.actions";
import {connect} from "react-redux";
import {ConsoleActions} from "../redux/console/Console.actions";
import {ConsolePageConsole} from "../components/console/ConsolePageConsole/ConsolePageConsole";

const mapStateToProps = (state: State) => {
    return {
        isFetching: state.console.isFetching,
        request: state.console.request,
        response: state.console.response,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendRequest: (request: string) => dispatch(ConsoleActions.sendRequest(request)),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(ConsolePageConsole);

export { connectedComponent as ConsolePageConsoleContainer };