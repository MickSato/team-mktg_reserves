import React from "react"
import PropTypes from "prop-types"
import { Provider, connect } from 'react-redux';
import Modal from "./Modal.jsx"
import { store } from './store/reservations';
import * as Actions from '../actions/reservations';
import { bindActionCreators } from 'redux';


class Reservations extends React.Component {
  componentWillMount() {
    store.dispatch(Actions.set_init(this.props.reservations));
  }
  render() {
    return (
      <Provider store={store}>
        <ReservationList />
      </Provider>
    );
  }
}

class ReservationList extends React.Component {
  render () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>使途</th>
            <th>予約開始</th>
            <th>予約終了</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.reservations.map((reservation) => {
            return <Reservation key={reservation.id} reservation={reservation}/>;
          })}
        </tbody>
      </table>
    );
  }
}

class Reservation extends React.Component {
  render () {
    return (
      <tr>
        <td><Modal render={this._show}>{this.props.reservation.usage}</Modal></td>
        <td>{this.props.reservation.start_at}</td>
        <td>{this.props.reservation.end_at}</td>
        <td><Modal render={this._edit}><span className="btn btn-primary">編集</span></Modal></td>
        <td><Modal render={this._delete}><span className="btn btn-primary">削除</span></Modal></td>
      </tr>
    );
  }
}

Reservations.propTypes = {
  reservations: PropTypes.array
}


function mapStateToProps(state) {
  return {
    reservations: state.reservations,
    reservation: state.reservation,
    show_modal: state.show_modal,
    show_create: state.show_create,
    show_edit: state.show_edit,
    show_destroy: state.show_destroy
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ReservationList);