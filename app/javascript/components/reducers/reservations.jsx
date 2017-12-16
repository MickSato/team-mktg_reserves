// SET_COUNTERを追記
import { SHOW_DETAIL, SHOW_CREATE, CREATE, SHOW_EDIT, EDIT, SHOW_DESTROY, DESTROY, CLOSE_MODAL, SET_INIT, SELECT_START_AT, SELECTED_START_AT, SELECT_END_AT, SELECTED_END_AT, CHANGE_USAGE } from '../actions/reservations';

export default function reducer(state, action) {
  switch (action.type) {
  case SHOW_DETAIL:
    return Object.assign({}, state, {
      reservation: action.reservation,
      show_detail: true
    });
  case SHOW_CREATE:
    return Object.assign({}, state, {
      show_create: true
    });
  case CREATE:
    var reservation = null;
    //ajaxで登録&登録後のreservationを受け取る
    return Object.assign({}, state, {
      reservations: state.reservations.concat(reservation),
      show_create: false
    });
  case SHOW_EDIT:
    return Object.assign({}, state, {
      reservation: action.reservation,
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
      show_edit: false
    });
  case SHOW_DESTROY:
    return Object.assign({}, state, {
      reservation: action.reservation,
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
      show_destroy: false
    });
  case CLOSE_MODAL:
    return Object.assign({}, state, {
      show_detail: false,
      show_edit: false,
      show_create: false,
      show_destroy: false
    });
  case SET_INIT:
    return Object.assign({}, state, {
      reservations: action.reservations
    });
  case SELECT_START_AT:
    return Object.assign({}, state, {
      popout_start_at: true
    });
  case SELECTED_START_AT:
    return Object.assign({}, state, {
      popout_start_at: false
    });
  case SELECT_END_AT:
    return Object.assign({}, state, {
      popout_end_at: true
    });
  case SELECTED_END_AT:
    return Object.assign({}, state, {
      popout_end_at: false
    });
  case CHANGE_USAGE:
    var reservation =Object.assign({}, state.reservation, {usage: action.usage});
    console.log(3);
    console.log(reservation);
    return Object.assign({}, state, {
      reservation: Object.assign({}, state.reservation, {usage: action.usage})
    });
  default:
    return state;
  }
}