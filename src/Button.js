import React from 'react';
import classNames from 'classnames';

import styles from './Button.css';

const Button = ({ children, className, variant, ...rest }) => (
  <button
    className={classNames('button', styles.className, className, {
      [`button--${variant}`]: variant,
    })}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
