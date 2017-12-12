import React from "react"
import PropTypes from "prop-types"
class Guest extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
}

Guest.propTypes = {
  name: PropTypes.string
};
export default Guest
