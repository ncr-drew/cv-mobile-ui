import React from 'react';
import classNames from 'classnames';

import styles from './Typography.css';

const Typography = ({
  children,
  is: Element,
  variant,
  weight,
  color,
  ...rest
}) => (
  <Element
    className={classNames('typography', styles.className, {
      [`typography--weight-${weight}`]: weight,
      [`typography--variant-${variant}`]: variant,
      [`typography--color-${color}`]: color,
    })}
    {...rest}
  >
    {children}
  </Element>
);

Typography.defaultProps = {
  is: 'p',
};

export default Typography;
