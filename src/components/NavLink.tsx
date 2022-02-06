import React from 'react';

import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

type INavLinkProps = {
  href: string;
  exact: boolean;
  children: React.ReactNode;
  className?: string;
  showActive?: boolean;
  notHoverEffect?: boolean;
  Component?: React.FunctionComponent | React.ComponentClass | React.FC;
};

const NavLink = ({
  href,
  exact,
  children,
  className,
  showActive = false,
  notHoverEffect = true,
  Component,
  ...props
}: INavLinkProps) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      {Component ? (
        <Component {...props}>{children}</Component>
      ) : (
        <a
          {...props}
          className={classnames(
            className,
            'text-black no-underlin',
            { 'border-b-2 border-blue-700': showActive && isActive },
            { 'hover:border-blue-700': !notHoverEffect }
          )}
        >
          {children}
        </a>
      )}
    </Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
  showActive: false,
};

export default NavLink;
