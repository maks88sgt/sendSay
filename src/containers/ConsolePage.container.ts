import {State} from "../config/State";
import { connect } from 'react-redux';
import {ConsolePage, ConsolePagePropsType} from "../components/console/ConsolePage";
import {Dispatch} from "redux";
import {AuthActions} from "../redux/auth/Auth.actions";

const mapStateToProps = (state: State): Omit<ConsolePagePropsType, 'logOut'> => {
    return {
        login: state.auth.login,
        sublogin: state.auth.sublogin,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<ConsolePagePropsType, 'logOut'> => {
    return {
        logOut: () => dispatch(AuthActions.logOut()),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(ConsolePage);

export { connectedComponent as ConsolePageContainer };