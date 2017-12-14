/* Actionsの実装 */

// Action名の定義
const SHOW_CREATE = 'SHOW_CREATE';
const CREATE = 'CREATE';
const SHOW_EDIT = 'SHOW_EDIT';
const EDIT = 'EDIT';
const SHOW_DESTROY = 'SHOW_DESTROY';
const DESTROY = 'DESTROY';
const SET_INIT = 'SET_INIT';

// Action Creators
function show_create(reservation) {
  // Action
  return {
    type: SHOW_CREATE,
    reservation
  };
}
function create(reservation) {
  return {
    type: CREATE,
    reservation
  };
}
function show_edit(reservation) {
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
function show_destroy(reservation) {
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
function set_init(reservations) {
  return {
    type: SET_INIT,
    reservations
  };
}
