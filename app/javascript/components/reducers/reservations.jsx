// SET_COUNTERを追記
import { SHOW_CREATE, CREATE, SHOW_EDIT, EDIT, SHOW_DESTROY, DESTROY, SET_INIT } from '../actions/reservations';

export default function reducer(state, action) {
  switch (action.type) {
  case SHOW_CREATE:
    return Object.assign({}, state, {
      reservation: action.reservation,
      show_modal: true,
      show_create: true
    });
  case CREATE:
    var reservation = null;
    //ajaxで登録&登録後のreservationを受け取る
    return Object.assign({}, state, {
      reservations: state.reservations.concat(reservation),
      show_modal: false
    });
  case SHOW_EDIT:
    return Object.assign({}, state, {
      reservation: action.reservation,
      show_modal: true,
      show_edit: true
    });
  case EDIT:
    var reservation = null;
    //ajaxで変更&変更後のreservationを受け取る
    var reservations = state.reservations.slice();
    reservations.some(function(v, i){
      if (v.id==action.reservation.id) reservations.splice(i,1, reservation);    
    });
    return Object.assign({}, state, {
      reservations: reservations,
      show_modal: false
    });
  case SHOW_DESTROY:
    return Object.assign({}, state, {
      reservation: action.reservation,
      show_modal: true,
      show_destroy: true
    });
  case DESTROY:
    //ajaxで削除
    var reservations = state.reservations.slice();
    reservations.some(function(v, i){
      if (v.id==action.reservation.id) reservations.splice(i,1);    
    });
    return Object.assign({}, state, {
      reservations: reservations,
      show_modal: false
    });
  case SET_INIT:
    return Object.assign({}, state, {
      reservations: action.reservations
    });
  default:
    return state;
  }
}