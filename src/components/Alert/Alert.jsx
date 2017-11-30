import React from 'react';
import classNames from 'classnames';
import { Alert, AlertProps, utils } from 'react-bootstrap';
import { Icon, CloseButton } from '../'

// @todo(dce): use contextIcons keys as boolean props

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


function contextColorize(Component) {
  const component = ({
    primary,
    secondary,
    success,
    info,
    warning,
    danger,
    bsStyle: bsStyleOld,
    ...props
  }) => {
    const bsStyle = primary && 'primary' ||
                    success && 'success' ||
                    info && 'info' ||
                    danger && 'danger' ||
                    warning && 'warning' ||
                    'default';
    return (
      <Component bsStyle={bsStyle} {...props} />
    )
  };
  component.displayName = Component.displayName;
  return component;
}


function AlertHOC(Component) {
  return class Alert extends Component {
    static displayName = 'Alert';
    render() {
      const {
        onDismiss,
        closeLabel,
        className,
        children,
        success,
        info,
        warning,
        danger,
        bsStyle: bsStyleMeh,
        ...props
      } = this.props;

      // console.log(props.bsStyle);
      const bsStyle = success && 'success' ||
                      info && 'info' ||
                      danger && 'danger' ||
                      warning && 'warning' ||
                      'info';

      const [bsProps, elementProps] = splitBsProps({ bsStyle, ...props });

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
