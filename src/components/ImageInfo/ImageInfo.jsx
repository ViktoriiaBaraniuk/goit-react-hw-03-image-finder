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
    const { page, images } = this.state;
    if (prevName !== nextName) {
      if (page === 1 && images.length === 0) {
        this.fetchImages();
      } else {
        this.setState({ page: 1, images: [], status: 'pending' });
        this.fetchImages();
      }
    }

    if (prevState.page !== page) {
      this.fetchImages();
    }
    if (prevState.images !== images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    imagesAPI
      .fetchImages(this.props.imageName, this.state.page)
      .then(images => {
        if (images.hits.length !== 0) {
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
            status: 'resolved',
          }));
        }
      })

      .catch(error => this.setState({ error, status: 'rejected' }));
  };
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

    return (
      <>
        <ImageGallery images={images} />
        {status === 'pending' ? (
          <Loader />
        ) : (
          <Button onClick={this.onClickLoadMore} />
        )}
      </>
    );
  }
}

export default ImageInfo;
