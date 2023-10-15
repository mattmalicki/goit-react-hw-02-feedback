import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import PropTypes from 'prop-types';

export class Section extends Component {
  state = {
    title: this.props.title,
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  countTotalFeedback = () => {
    this.setState(state => {
      return { total: state.good + state.neutral + state.bad };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => {
      return {
        positivePercentage: Math.round((state.good * 100) / state.total),
      };
    });
  };

  onLeaveFeedback = event => {
    if (event.target.nodeName === 'BUTTON') {
      const id = event.target.id;
      this.setState(state => ({
        [id]: state[id] + 1,
      }));
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
    }
  };
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        />
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};
