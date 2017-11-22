import * as React from 'react';
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import Icon from '../Icon';

export interface AvatarProps {
  imgUrl: string;
  size: string;
}

const propTypes = {
  imgUrl: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
};

const defaultProps = {

};

// const mkAvatar = (size: string, imgUrl: string): React.ReactElement<AvatarProps> => {
//   return imgUrl
//     ? <img
//         className={classNames(
//           'avatar-img',
//           'rounded-circle',
//           size && `avatar-${size}`,
//         )}
//         src={imgUrl}
//       />
//     : <Icon
//         className={classNames(
//           'avatar-icon',
//           size && `avatar-${size}`,
//         )}
//         name="user-times"
//         size="4x"
//       />
//     ;
// };

// const addClasses = (Component: any, ...classes: string[]) => <Component className={classNames(classes)} />;

const AvatarImg: React.SFC<{ imgUrl: string, classes: string[] }> = ({
  imgUrl,
  classes,
}) => <img src={imgUrl} className={classNames(classes)} />;

const AvatarBlank: React.SFC<{ classes: any }> = (
  classes,
) => <Icon name="user-circle" size="4x" className={classNames(classes)} />;

const Avatar: React.SFC<AvatarProps> = ({
  imgUrl,
  size
}) => {
  const classes = classNames('avatar', 'rounded-circle', size && `avatar-${size}`);
  return imgUrl
    ? <img src={imgUrl} className={classes} />
    : <Icon name="user" size="3x" className={classes} />
    ;
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
