import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
  };

  timer = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 700);
  };

  scroll = () => {
    this.props.onClick();
    this.timer();
  };

  render() {
    return (
      <div className="BtnContainer">
        <button onClick={this.scroll} className="Button" type="button">
          Load more
        </button>
      </div>
    );
  }
}

/* timer = setTimeout(() => {
  window.scrollBy({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
}, 700);

componentDidMount() {
  scroll = () => {
    this.props.onClick();
    this.timer ();
  };
}

componentWillUnmount() {
  clearTimeout(this.timer());
} */
