/* Actionsの実装 */

// Action名の定義
const SHOW_DETAIL = 'SHOW_DETAIL';
const SHOW_CREATE = 'SHOW_CREATE';
const CREATE = 'CREATE';
const SHOW_EDIT = 'SHOW_EDIT';
const EDIT = 'EDIT';
const SHOW_DESTROY = 'SHOW_DESTROY';
const DESTROY = 'DESTROY';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_INIT = 'SET_INIT';

// Action Creators
function showDetail(reservation) {
  // Action
  return {
    type: SHOW_DETAIL,
    reservation
  };
}
function showCreate() {
  return {
    type: SHOW_CREATE
  };
}
function create(reservation) {
  return {
    type: CREATE,
    reservation
  };
}
function showEdit(reservation) {
  return {
    type: SHOW_EDIT,
    reservation
  };
}
function edit(reservation) {
  return {
    type: EDIT,
    reservation
  };
}
function showDestroy(reservation) {
  return {
    type: SHOW_DESTROY,
    reservation
  };
}
function destroy(reservation) {
  return {
    type: DESTROY,
    reservation
  };
}
function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
function setInit(reservations) {
  return {
    type: SET_INIT,
    reservations
  };
}
