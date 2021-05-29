import {State} from "../config/State";
import {AuthActions} from "../redux/auth/Auth.actions";
import {LoginPage} from "../components/login/LoginPage";
import { connect } from 'react-redux';
import {Dispatch} from "redux";

const mapStateToProps = (state: State) => {
    return {
        isLoading: state.auth.isLoading,
        loginError: state.auth.loginError,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        tryLogIn: (formData) => dispatch(AuthActions.tryLogIn(formData)),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(LoginPage);

export { connectedComponent as LoginPageContainer };