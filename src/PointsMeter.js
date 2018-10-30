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
  <div className="points-meter">
    <Typography className="meter-label" color="white">
      <Typography is="span" className="meter-wrap-value">
        {value}
      </Typography>{' '}
      / {maxValue}
    </Typography>
    <div
      className={classNames('meter', styles.className, className, {
        [`meter--${size}`]: size,
      })}
      {...rest}
    >
      <input
        type="range"
        className="meter-bar"
        min={minValue}
        max={maxValue}
        value={value}
        style={{
          border: `2px solid ${bgColor}`,
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
