import React from "react"
import PropTypes from "prop-types"
class Modal extends React.Component {
  render () {
    if (this.props.open) {
      return (
        <div>
          <div className="modal_background" onClick={this.props.handleClose}/>
          <div className="modal_popout">
            <div className="modal_content">
              {this.props.children}
            </div>
          </div>
        </div>
      );
    } else {
      return false;
    }
  }
}

Modal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func
};
export default Modal
