import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames";
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.open = this.open.bind(this);
    this._onClose = this._onClose.bind(this);
    this.state = {isActive: false, willClose: false};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive) {
      this.setState({isActive: true})
    } else {
      this.setState({willClose: true});
      // wait to animate the modal closing.
    }
  }
  
  open() {
    this.setState({isActive: true, willClose: false});
  }

  _onClose(e) {
    const self = this;
    this.setState({willClose: true});
    setTimeout(() => {self.setState({isActive: false});}, 500);
    if (this.props.onClose){
      this.props.onClose();
    }
  }
  
  render () {
    const modalClasses = classNames({
      "modal_popout": true,
      "animated": true,
      "fadeInDown": this.state.isActive,
      "fadeOutUp": this.state.willClose
    });
    if (this.state.isActive) {
      return (
        <div>
          <div>{this.props.children}</div>
          <div className="modal_background" onClick={this._onClose}/>
          <div className={modalClasses}>
            {this.props.render()}
          </div>
        </div>
      );
    } else {
      return <div onClick={this.open}>{this.props.children}</div>;
    }
  }
}

Modal.propTypes = {
  render: PropTypes.func.isRequired,
  onClose: PropTypes.func
};
export default Modal
