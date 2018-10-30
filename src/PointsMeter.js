import React from 'react';
import classNames from 'classnames';

import styles from './PointsMeter.css';

const PointsMeter = ({
  className,
  barColor,
  maxValue,
  minValue,
  value,
  ...rest
}) => (
  <div className={classNames('meter', styles.className, className)} {...rest}>
    <input
      type="range"
      className="meter-bar"
      min={minValue}
      max={maxValue}
      value={value}
      style={{
        backgroundSize:
          ((value - minValue) * 100) / (maxValue - minValue) + '% 100%',
      }}
    />
    <div className="meter-star-wrap">
      <div className="meter-star star">
        <div className="meter-star-inner star" />
      </div>
    </div>
  </div>
);

PointsMeter.defaultProps = {
  minValue: 0,
};

export default PointsMeter;
