import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    srcModal: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { src, alt, srcModal } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <li className="ImageGalleryItem">
          <img
            onClick={this.toggleModal}
            src={src}
            alt={alt}
            className="ImageGalleryItem-image"
          />
        </li>

        {showModal && (
          <Modal onClose={this.toggleModal} srcModal={srcModal} alt={alt} />
        )}
      </>
    );
  }
}
