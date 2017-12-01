import React from 'react';
import classNames from 'classnames';
import getDisplayName from 'react-display-name';
import PropTypes from 'prop-types';
import { Alert as AlertRBS, utils } from 'react-bootstrap';
import { Icon, CloseButton } from '../'
import { bsContextStyle, BS_CONTEXT_NAMES } from '../../utils';

// @todo(dce): use contextIcons keys as boolean props

const {
  getClassSet,
  prefix,
  splitBsProps,
} = utils.bootstrapUtils;

const contextIcons = {
  [BS_CONTEXT_NAMES.SUCCESS]: 'check-circle',
  [BS_CONTEXT_NAMES.INFO]: 'info-circle',
  [BS_CONTEXT_NAMES.WARNING]: 'warning',
  [BS_CONTEXT_NAMES.DANGER]: 'warning',
};

function AlertHOC(Component) {
  return class Alert extends Component {
    static displayName = 'Alert';
    render() {
      const {
        onDismiss,
        closeLabel,
        className,
        children,
        ...props
      } = this.props;

      const [bsProps, elementProps] = splitBsProps(props);

      const dismissable = !!onDismiss;
      const classes = {
        ...getClassSet(bsProps),
        [prefix(bsProps, 'dismissable')]: dismissable,
      };

      return (
        <div
          {...elementProps}
          role="alert"
          className={classNames(className, classes)}
        >
          <div className="alert-icon">
            <Icon name={contextIcons[bsProps.bsStyle]} />
          </div>
          <div className="alert-body">
            {dismissable && (
              <CloseButton
                onClick={onDismiss}
                label={closeLabel}
              />
            )}
            {children}
          </div>
        </div>
      );
    }
  }
}

export const CWDSAlert = AlertHOC(AlertRBS);

const Alert = bsContextStyle(CWDSAlert, 'info');
Alert.propTypes = { ...AlertRBS.propTypes };
Alert.displayName = 'Alert';
export default Alert;
