import React from "react"
import PropTypes from "prop-types"
import DatePicker from 'react-ja-date-picker'
class PopDatePicker extends React.Component {
  render () {
    if (this.props.popout) {
      return (
        <div className="pop_datepicker">
          <DatePicker type={'button'} onSelect={(year, month, day) => this.props.onSelect(year, month, day)} />
        </div>
      );
    } else {
      return false;
    }
  }
}

PopDatePicker.propTypes = {
  popout: PropTypes.bool,
  onSelect: PropTypes.func
};
export default PopDatePicker
