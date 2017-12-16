import reducer from '../reducers/reservations';
import { createStore } from 'redux';
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
export const store = createStore(reducer, initialState);