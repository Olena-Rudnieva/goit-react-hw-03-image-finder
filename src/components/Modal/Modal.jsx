import { Component } from 'react';
import { Overlay, ModalPicture } from './Modal.styled';

export class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEsc);
  }

  handlePressEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.props.closeModal}>
        <ModalPicture>
          <img
            src={this.props.bigPicture}
            alt=""
            onClick={this.props.closeModal}
          />
        </ModalPicture>
      </Overlay>
    );
  }
}
