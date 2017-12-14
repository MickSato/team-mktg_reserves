import reducer from '../reducers/reservations';
import { createStore } from 'redux';
const initialState = {
  reservations: null,
  reservation: null,
  show_modal: false,
  show_create: false,
  show_edit: false,
  show_destroy: false
};
const store = createStore(reducer, initialState);