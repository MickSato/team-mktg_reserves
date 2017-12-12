import React from "react"
import PropTypes from "prop-types"
class Reservations extends React.Component {
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
        <td>{this.props.reservation.usage}</td>
        <td>{this.props.reservation.start_at}</td>
        <td>{this.props.reservation.end_at}</td>
        <td><span className="btn btn-primary">編集</span></td>
        <td><span className="btn btn-primary">削除</span></td>
      </tr>
    );
  }
}

Reservations.propTypes = {
  reservations: PropTypes.array
}
export default Reservations