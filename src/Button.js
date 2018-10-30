import React from 'react';
import classNames from 'classnames';

import styles from './Button.css';

const Button = ({ children, className, bgColor, ...rest }) => (
  <button
    className={classNames('button', styles.className, className, {
      [`button--bg-${bgColor}`]: bgColor,
    })}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
