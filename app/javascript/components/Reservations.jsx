import React from "react"
import PropTypes from "prop-types"
import { Provider, connect } from 'react-redux';
import Modal from "./Modal.jsx"
import { store } from './store/reservations';
import * as Actions from '../actions/reservations';
import { bindActionCreators } from 'redux';


class Reservations extends React.Component {
  componentWillMount() {
    store.dispatch(Actions.setInit(this.props.reservations));
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
      <div>
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
              return <Reservation key={reservation.id} reservation={reservation} openDetail={this.props.showDetail} openEdit={this.props.showEdit} openDestroy={this.props.showDestroy}/>;
            })}
          </tbody>
        </table>
        <Modal open={this.props.show_detail}>
          <ReservationForm reservation={this.props.reservation} readonly={true} />
        </Modal>
        <Modal open={this.props.show_edit}>
          <ReservationForm reservation={this.props.reservation} submitButton="更新" handleSubmit={this.props.edit} />
        </Modal>
        <Modal open={this.props.show_create} submitButton="登録" handleSubmit={this.props.create} >
          <ReservationForm />
        </Modal>
        <Modal open={this.props.show_destroy}>
          <ReservationForm reservation={this.props.reservation} readonly={true} handleSubmit={this.props.destroy} submitButton="削除" />
        </Modal>
      </div>
    );
  }
}

class Reservation extends React.Component {
  render () {
    return (
      <tr>
        <td onClick={this.props.openDetail(this.props.reservation)}>{this.props.reservation.usage}</td>
        <td>{this.props.reservation.start_at}</td>
        <td>{this.props.reservation.end_at}</td>
        <td><span className="btn btn-primary" onClick={this.props.openEdit(this.props.reservation)}>編集</span></td>
        <td><span className="btn btn-primary" onClick={this.props.openDestroy(this.props.reservation)}>削除</span></td>
      </tr>
    );
  }
}

class ReservationForm extends React.Component {
  render () {
    const submit = (!this.props.submitButton ? null : <div className="action"><input type="submit" value={this.props.submitButton} className="btn btn-primary" /></div>);
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="field form-group">
          <label for={this.props.prefix + "_start_at"}>予約開始日</label>
          <input type="text" id={this.props.prefix + "_start_at"} className="datepicker form-control" />
        </div>
        <div className="field form-group">
          <label for={this.props.prefix + "_end_at"}>予約終了日</label>
          <input type="text" id={this.props.prefix + "_end_at"} className="datepicker form-control" />
        </div>
        <div className="field form-group">
          <label for={this.props.prefix + "_usage"}>用途</label>
          <input type="text" id={this.props.prefix + "_usage"} className="form-control" />
        </div>
        <div className="field form-group">
          <label for={this.props.prefix + "_guests"}>宿泊者</label>
          <select id={this.props.prefix + "_guests"} className="form-control select2" multiple={true} />
        </div>
        {submit}
      </form>
    );
  }
}

Reservations.propTypes = {
  reservations: PropTypes.array,
  reservation: PropTypes.object,
  show_detail: PropTypes.bool,
  show_create: PropTypes.bool,
  show_edit: PropTypes.bool,
  show_destroy: PropTypes.bool
}

Reservation.propTypes = {
  reservation: PropTypes.object,
  openDetail: PropTypes.func,
  openEdit: PropTypes.func,
  openDestroy: PropTypes.func
}


function mapStateToProps(state) {
  return {
    reservations: state.reservations,
    reservation: state.reservation,
    show_detail: state.show_detail,
    show_create: state.show_create,
    show_edit: state.show_edit,
    show_destroy: state.show_destroy
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ReservationList);