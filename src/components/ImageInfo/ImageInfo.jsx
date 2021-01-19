import React, { Component } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import imagesAPI from '../../services/images-api';
import ImageError from '../ImageError/ImageError';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

class ImageInfo extends Component {
  state = {
    images: [],
    status: 'idle',
    page: 1,
  };

  static propTypes = {
    imageName: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const nextPage = this.state.page;
    const prevPage = prevState.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: 'pending' });
      imagesAPI
        .fetchImages(nextName, nextPage)
        .then(images => {
          if (images.total !== 0) {
            this.setState(prevState => ({
              images: [...prevState.images, ...images.hits],
              status: 'resolved',
            }));
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevName !== nextName) {
      this.setState({ page: 1, images: [] });
    }
  }

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return (
        <div className="IdleMessage">Please enter data to search field</div>
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <ImageError />;
    }
    if (images.total === 0) {
      return (
        <div>
          Image was not found. Please, change your request and try again.
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images} />
          <Button onClick={this.onClickLoadMore} page={this.state.page} />
        </>
      );
    }
  }
}

export default ImageInfo;
