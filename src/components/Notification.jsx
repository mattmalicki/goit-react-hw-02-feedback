import { Component } from 'react';
import PropTypes from 'prop-types';

export class Notification extends Component {
  state = { message: this.props.message };

  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
      </>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
