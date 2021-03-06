import React from 'react';
import classNames from 'classnames';

import Typography from './Typography';

import styles from './PointsMeter.css';

const PointsMeter = ({
  className,
  barColor,
  bgColor,
  maxValue,
  minValue,
  value,
  size,
  ...rest
}) => (
  <div
    className={classNames('points-meter', className, {
      [`points-meter--${size}`]: size,
    })}
  >
    <Typography className="meter-label">
      <Typography is="span" className="meter-label-value">
        {value}
      </Typography>
      /
      <Typography is="span" className="meter-label-max-value">
        {maxValue}
      </Typography>
    </Typography>
    <div className={classNames('meter', styles.className)} {...rest}>
      <input
        type="range"
        className="meter-bar"
        min={minValue}
        max={maxValue}
        value={value}
        style={{
          borderColor: `${bgColor}`,
          backgroundColor: bgColor,
          backgroundImage: `linear-gradient(${barColor}, ${barColor})`,
          backgroundSize:
            ((value - minValue) * 100) / (maxValue - minValue) + '% 100%',
        }}
      />
      <div className="meter-star-wrap">
        <div className="meter-star star" style={{ borderBottomColor: bgColor }}>
          <span
            className="star-before"
            style={{ borderBottomColor: bgColor }}
          />
          <span className="star-after" style={{ borderBottomColor: bgColor }} />
        </div>
        <div
          className="meter-star-inner star"
          style={{ borderBottomColor: barColor }}
        >
          <span
            className="star-before"
            style={{ borderBottomColor: barColor }}
          />
          <span
            className="star-after"
            style={{ borderBottomColor: barColor }}
          />
        </div>
      </div>
    </div>
  </div>
);

PointsMeter.defaultProps = {
  size: 'normal',
  barColor: '#54b948',
  bgColor: '#fff',
  minValue: 0,
};

export default PointsMeter;
