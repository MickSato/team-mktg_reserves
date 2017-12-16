/* Actionsの実装 */

// Action名の定義
export const SHOW_DETAIL = 'SHOW_DETAIL';
export const SHOW_CREATE = 'SHOW_CREATE';
export const CREATE = 'CREATE';
export const SHOW_EDIT = 'SHOW_EDIT';
export const EDIT = 'EDIT';
export const SHOW_DESTROY = 'SHOW_DESTROY';
export const DESTROY = 'DESTROY';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_INIT = 'SET_INIT';
export const SELECT_START_AT = 'SELECT_START_AT';
export const SELECTED_START_AT = 'SELECTED_START_AT';
export const SELECT_END_AT = 'SELECT_END_AT';
export const SELECTED_END_AT = 'SELECTED_END_AT';
export const CHANGE_USAGE = 'CHANGE_USAGE';

// Action Creators
export function showDetail(reservation) {
  // Action
  return {
    type: SHOW_DETAIL,
    reservation
  };
}
export function showCreate() {
  return {
    type: SHOW_CREATE
  };
}
export function create(reservation) {
  return {
    type: CREATE,
    reservation
  };
}
export function showEdit(reservation) {
  return {
    type: SHOW_EDIT,
    reservation
  };
}
export function edit(reservation) {
  return {
    type: EDIT,
    reservation
  };
}
export function showDestroy(reservation) {
  return {
    type: SHOW_DESTROY,
    reservation
  };
}
export function destroy(reservation) {
  return {
    type: DESTROY,
    reservation
  };
}
export function closeModal() {
  console.log(9);
  return {
    type: CLOSE_MODAL
  };
}
export function setInit(reservations) {
  return {
    type: SET_INIT,
    reservations
  };
}
export function selectStartAt() {
  console.log(1);
  return {
    type: SELECT_START_AT
  };
}
export function selectedStartAt(reservation, year, month, day) {
  console.log(8);
  return {
    type: SELECTED_START_AT
  };
}
export function selectEndAt() {
  return {
    type: SELECT_END_AT
  };
}
export function selectedEndAt(reservation, year, month, day) {
  return {
    type: SELECTED_END_AT
  };
}
export function onChangeUsage(reservation, usage) {
  return {
    type: CHANGE_USAGE,
    usage: usage
  };
}
