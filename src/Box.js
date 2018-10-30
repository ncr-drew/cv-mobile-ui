import React from 'react';
import classNames from 'classnames';

import styles from './Box.css';

const Box = ({
  children,
  className,
  flex,
  padding,
  bgColor,
  style,
  hasBorder,
  hasShadow,
  ...rest
}) => (
  <div
    className={classNames('box', styles.className, className, {
      [`box--bg-${bgColor}`]: bgColor,
      'box--flex': flex,
      'box--has-border': hasBorder,
      'box--has-shadow': hasShadow,
    })}
    style={{ ...style, padding }}
    {...rest}
  >
    <div className="box-inner">{children}</div>
  </div>
);

Box.defaultProps = {
  padding: 16,
  style: {},
};

export default Box;
