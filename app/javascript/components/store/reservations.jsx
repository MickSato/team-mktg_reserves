import reducer from '../reducers/reservations';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
import rootSaga from '../sagas'

const initialState = {
  reservations: null,
  reservation: null,
  show_detail: false,
  show_create: false,
  show_edit: false,
  show_destroy: false,
  popout_start_at: false,
  popout_end_at: false,
};
// Saga ミドルウェアを作成する
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);