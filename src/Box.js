import React from 'react';
import classNames from 'classnames';

import styles from './Box.css';

const Box = ({ children, className, flex, gradient, bgColor, ...rest }) => (
  <div
    className={classNames('box', styles.className, className, {
      [`box--gradient-${gradient}`]: gradient,
      [`box--bg-${bgColor}`]: bgColor,
      'box--flex': flex,
    })}
    {...rest}
  >
    <div className="box-inner">{children}</div>
  </div>
);

export default Box;
