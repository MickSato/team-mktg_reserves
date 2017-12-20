import create_reservation from './api'
import { call, put, take, fork } from 'redux-saga/effects'
import { CREATE_RESERVATION, successReservation, failureReservation } from '../actions/reservations';

function* handleRequestUser() {
  while (true) {
    const action = yield take(CREATE_RESERVATION);
    const { response, error } = yield call(create_reservation, action.reservation);
    if (response && !error) {
      yield put(successReservation(response));
    } else {
      yield put(failureReservation(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestUser);
}