import { Component } from 'react';
import { Notification } from './Notification';
import css from '../css/Statistics.module.css';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <p className={css['statistics-header']}>Statistics</p>
        {total ? (
          <div className={css['stats-info']}>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Positive percentage: {positivePercentage}%</span>
          </div>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
