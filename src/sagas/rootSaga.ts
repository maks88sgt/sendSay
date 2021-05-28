import {takeLatest} from "redux-saga";
import {AuthActions} from "../redux/auth/Auth.actions";

export function* rootSaga() {
    yield takeLatest(AuthActions.SET_USER_DATA, AuthSaga.setUsersData);
}