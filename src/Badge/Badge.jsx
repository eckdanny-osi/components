import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// export interface BadgeProps {
//   color?: string;
//   pill?: boolean;
//   tag: string;
//   href?: string;
//   className?: string;
// }

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  color: 'secondary',
  pill: true,
  tag: 'span'
};

export const Badge = ({
  color,
  className,
  pill,
  tag: Tag,
  ...attrs
}) => {

  if (attrs.href && Tag === 'span') {
    Tag = 'a';
  }

  return (
    <Tag
      {...attrs}
      className={classNames(
        className,
        'badge',
        `badge-${color}`,
        pill && 'badge-pill',
      )}
    />
  );
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
