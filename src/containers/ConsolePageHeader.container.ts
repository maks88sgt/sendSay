import {State} from "../config/State";
import { connect } from 'react-redux';
import {Dispatch} from "redux";
import {AuthActions} from "../redux/auth/Auth.actions";
import {ConsolePageHeader, ConsolePageHeaderPropsType} from "../components/console/ConsolePageHeader/ConsolePageHeader";

const mapStateToProps = (state: State): Omit<ConsolePageHeaderPropsType, 'logOut'> => {
    return {
        login: state.auth.login,
        sublogin: state.auth.sublogin,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<ConsolePageHeaderPropsType, 'logOut'> => {
    return {
        logOut: () => dispatch(AuthActions.logOut()),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(ConsolePageHeader);

export { connectedComponent as ConsolePageHeaderContainer };