import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../';

const propTypes = {
  imgUrl: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

const defaultProps = {
  size: 'md',
};

const Avatar = ({
  imgUrl,
  size
}) => {
  const classes = classNames('avatar', size && `avatar-${size}`);
  return imgUrl
    ? <img src={imgUrl} className={classes} />
    : <Icon name="user" size="3x" className={classes} />
    ;
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
