import React from "react"
import PropTypes from "prop-types"
import { Provider, connect } from 'react-redux';
import { store } from './store/reservations';
import * as Actions from './actions/reservations';
import Modal from "./Modal"
import { bindActionCreators } from 'redux';
import PopDatePicker from './PopDatePicker'


export default class Reservations extends React.Component {
  componentWillMount() {
    store.dispatch(Actions.setInit(this.props.reservations));
  }
  render() {
    return (
      <Provider store={store}>
        <ReservationContainer />
      </Provider>
    );
  }
}

class ReservationList extends React.Component {
  render () {
    return (
      <div>
        <div className="pull-right">
          <button className="btn btn-primary" onClick={this.props.showCreate}>新規予約申請</button>
        </div>
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
        <Modal open={this.props.show_detail} handleClose={this.props.closeModal}>
          <ReservationForm reservation={this.props.reservation} readOnly={true} />
        </Modal>
        <Modal open={this.props.show_edit} handleClose={this.props.closeModal}>
          <ReservationForm reservation={this.props.reservation} submitButton="更新" handleSubmit={this.props.edit} popout_start_at={this.props.popout_start_at} popout_end_at={this.props.popout_end_at} selectStartAt={this.props.selectStartAt} selectedStartAt={this.props.selectedStartAt} selectEndAt={this.props.selectEndAt} selectedEndAt={this.props.selectedEndAt} onChangeUsage={this.props.onChangeUsage} onChangeGuest={this.props.onChangeGuest} onAddGuest={this.props.addGuest} />
        </Modal>
        <Modal open={this.props.show_create} handleClose={this.props.closeModal}>
          <ReservationForm reservation={this.props.reservation} submitButton="登録" handleSubmit={this.props.create} popout_start_at={this.props.popout_start_at} popout_end_at={this.props.popout_end_at} selectStartAt={this.props.selectStartAt} selectedStartAt={this.props.selectedStartAt} selectEndAt={this.props.selectEndAt} selectedEndAt={this.props.selectedEndAt}  onChangeUsage={this.props.onChangeUsage} onChangeGuest={this.props.onChangeGuest} onAddGuest={this.props.addGuest}/>
        </Modal>
        <Modal open={this.props.show_destroy} handleClose={this.props.closeModal}>
          <ReservationForm reservation={this.props.reservation} readOnly={true} handleSubmit={this.props.destroy} submitButton="削除" />
        </Modal>
      </div>
    );
  }
}

class Reservation extends React.Component {
  render () {
    return (
      <tr>
        <td onClick={(e) => this.props.openDetail(this.props.reservation)}>{this.props.reservation.usage}</td>
        <td>{this.props.reservation.start_at}</td>
        <td>{this.props.reservation.end_at}</td>
        <td><span className="btn btn-primary" onClick={(e) => this.props.openEdit(this.props.reservation)}>編集</span></td>
        <td><span className="btn btn-primary" onClick={(e) => this.props.openDestroy(this.props.reservation)}>削除</span></td>
      </tr>
    );
  }
}

class ReservationForm extends React.Component {
  render () {
    const submit = (!this.props.submitButton ? null : <div className="action"><input type="button" value={this.props.submitButton} className="btn btn-primary" onClick={this.props.handleSubmit}/></div>);
    return (
      <div>
        <div className="field form-group">
          <label htmlFor={this.props.prefix + "_start_at"}>予約開始日</label>
          <input type="text" className="form-control" disabled={this.props.readOnly} readOnly={true} value={this.props.reservation.start_at} onFocus={this.props.selectStartAt} />
          <PopDatePicker onSelect={ (year, month, day) => this.props.selectedStartAt(year, month, day)} popout={this.props.popout_start_at}/>
        </div>
        <div className="field form-group">
          <label htmlFor={this.props.prefix + "_end_at"}>予約終了日</label>
          <input type="text" className="form-control" disabled={this.props.readOnly} readOnly={true} value={this.props.reservation.end_at} onFocus={this.props.selectEndAt}/>
          <PopDatePicker onSelect={ (year, month, day) => this.props.selectedEndAt(year, month, day)} popout={this.props.popout_end_at}/>
        </div>
        <div className="field form-group">
          <label htmlFor={this.props.prefix + "_usage"}>用途</label>
          <input type="text" className="form-control" disabled={this.props.readOnly} readOnly={this.props.readOnly} value={this.props.reservation.usage} onChange={(e) => this.props.onChangeUsage(e.target.value)}/>
        </div>
        <div className="field form-group">
          <label htmlFor={this.props.prefix + "_guests"}>宿泊者</label><i className="far fa-plus-square" onClick={this.props.onAddGuest}></i>
          {this.props.reservation.guests.map((guest, idx) => {
            return <input key={"guest_" + idx} type="text" className="form-control" disabled={this.props.readOnly} readOnly={this.props.readOnly} value={guest} onChange={(e) => this.props.onChangeGuest(idx, e.target.value)}/>
          })}
        </div>
        {submit}
      </div>
    );
  }
}

Reservation.propTypes = {
  reservation: PropTypes.object,
  openDetail: PropTypes.func,
  openEdit: PropTypes.func,
  openDestroy: PropTypes.func
}

ReservationForm.propTypes = {
  reservation: PropTypes.object,
  submitButton: PropTypes.string,
  handleSubmit: PropTypes.func,
  readOnly: PropTypes.bool,
  popout_start_at: PropTypes.bool,
  popout_end_at: PropTypes.bool,
  selectStartAt: PropTypes.func,
  selectedStartAt: PropTypes.func,
  selectEndAt: PropTypes.func,
  selectedEndAt: PropTypes.func,
  onChangeUsage: PropTypes.func,
  onChangeGuest: PropTypes.func,
  onAddGuest: PropTypes.func
}


function mapStateToProps(state) {
  return {
    reservations: state.reservations,
    reservation: state.reservation,
    show_detail: state.show_detail,
    show_create: state.show_create,
    show_edit: state.show_edit,
    show_destroy: state.show_destroy,
    popout_start_at: state.popout_start_at,
    popout_end_at: state.popout_end_at
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
  
const ReservationContainer = connect(mapStateToProps, mapDispatchToProps)(ReservationList);