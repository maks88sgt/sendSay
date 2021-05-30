import { takeLatest } from "redux-saga/effects";
import {AuthActions} from '../redux/auth/Auth.actions';
import {AuthSaga} from "./AuthSaga";


export function* rootSaga() {
  yield takeLatest (AuthActions.TRY_LOGIN, AuthSaga.tryLogIn);
  yield takeLatest (AuthActions.LOGOUT, AuthSaga.logOut);
}