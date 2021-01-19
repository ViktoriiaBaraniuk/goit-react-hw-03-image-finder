import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageInfo from './components/ImageInfo/ImageInfo';
import './App.css';

class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageInfo imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
