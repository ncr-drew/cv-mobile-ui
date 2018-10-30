import React from 'react';
import classNames from 'classnames';

import styles from './Box.css';

const Box = ({
  children,
  className,
  flex,
  gradient,
  padding,
  bgColor,
  ...rest
}) => (
  <div
    className={classNames('box', styles.className, className, {
      [`box--gradient-${gradient}`]: gradient,
      [`box--bg-${bgColor}`]: bgColor,
      'box--flex': flex,
    })}
    style={{ padding }}
    {...rest}
  >
    <div className="box-inner">{children}</div>
  </div>
);

Box.defaultProps = {
  padding: 16,
};

export default Box;
