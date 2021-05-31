import {call, put, select} from "redux-saga/effects";
import Sendsay from 'sendsay-api';
import {ConsoleStore} from "../redux/console/Console.store";
import {ConsoleActions} from "../redux/console/Console.actions";
import {getCredentials} from "../utils/sagaSelectors";

export class ConsoleSaga {
    static* updateStore(partialStore: Partial<ConsoleStore>) {
        yield put(ConsoleActions.updateStore(partialStore));
    }

    static* sendRequest(action) {
        const request = action.payload;
        yield ConsoleSaga.updateStore({isFetching: true, request: request});
        const credentials: object = yield select(getCredentials);
        const sendsay: Sendsay = new Sendsay({auth: {...credentials}});
        try {
            const response: Response = yield call(sendsay.request, JSON.parse(request));
            yield ConsoleSaga.updateStore({isFetching: false, response: JSON.stringify(response, null, 4), responseSuccess: true});
        } catch (err) {
            yield ConsoleSaga.updateStore({
                isFetching: false,
                response: JSON.stringify(err, null, 4),
                responseSuccess: false
            });
        }

    }
}