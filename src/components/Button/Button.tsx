import React from 'react';

import { Button as AntdButton, ButtonProps } from 'antd';
import classnames from 'classnames';

const Button = ({ children, className, htmlType, ...props }: ButtonProps) => {
  return (
    <AntdButton
      {...props}
      htmlType={htmlType}
      className={classnames('hover:border-black hover:text-black', className)}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
