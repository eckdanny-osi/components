import React from 'react';
import classNames from 'classnames';
import { Alert, utils } from 'react-bootstrap';
import { Icon, CloseButton } from '../'

const {
  getClassSet,
  prefix,
  splitBsProps,
} = utils.bootstrapUtils;

const contextIcons = {
  success: 'check-circle',
  info: 'info-circle',
  warning: 'warning',
  danger: 'warning',
};

function AlertHOC(Component) {
  return class Alert extends Component {
    static displayName = 'Alert';
    render() {
      const { onDismiss, closeLabel, className, children, ...props } =
        this.props;
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

export default AlertHOC(Alert);
