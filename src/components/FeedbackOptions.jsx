import { Component } from 'react';
import css from '../css/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  state = {
    options: this.props.options,
    onLeaveFeedback: this.props.onLeaveFeedback,
  };
  addButtons = this.state.options.map((item, index) => (
    <button key={index} type="button" id={item} className={css.feedbackButton}>
      {item}
    </button>
  ));
  render() {
    return (
      <div className={css.feedbackButtons} onClick={this.state.onLeaveFeedback}>
        {this.addButtons}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};
