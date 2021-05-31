import {State} from "../config/State";
import { connect } from 'react-redux';
import {AppRouter} from "../components/appRouter/AppRouter";
import {ConsolePageHistory} from "../components/console/ConsolePageHistory/ConsolePageHystory";

const mapStateToProps = (state: State) => {
    return {
        historyItems: state.history?.current,
    };
};

const connector = connect(mapStateToProps);
const connectedComponent = connector(ConsolePageHistory);

export { connectedComponent as ConsolePageHistoryContainer };