import {State} from "../config/State";
import { connect } from 'react-redux';
import {AppRouter} from "../components/appRouter/AppRouter";

const mapStateToProps = (state: State) => {
    return {
        authSuccess: state.auth.authSuccess,
    };
};

const connector = connect(mapStateToProps);
const connectedComponent = connector(AppRouter);

export { connectedComponent as AppRouterContainer };