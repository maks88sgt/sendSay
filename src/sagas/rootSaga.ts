import { takeLatest } from "redux-saga/effects";
import {AuthActions} from '../redux/auth/Auth.actions';
import {AuthSaga} from "./AuthSaga";
import {ConsoleActions} from "../redux/console/Console.actions";
import {ConsoleSaga} from "./ConsoleSaga";
import {HistoryActions} from "../redux/history/History.actions";
import {HistorySaga} from "./HistorySaga";


export function* rootSaga() {
  yield takeLatest (AuthActions.TRY_LOGIN, AuthSaga.tryLogIn);
  yield takeLatest (AuthActions.LOGOUT, AuthSaga.logOut);
  yield takeLatest (ConsoleActions.SEND_REQUEST, ConsoleSaga.sendRequest);
  yield takeLatest (HistoryActions.SAVE_REQUEST_HISTORY_ITEM, HistorySaga.saveRequest);
}