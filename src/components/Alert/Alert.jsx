import React from 'react';
import classNames from 'classnames';
import getDisplayName from 'react-display-name';
import PropTypes from 'prop-types';
import { Alert as AlertRBS, utils } from 'react-bootstrap';
import { Icon, CloseButton } from '../'
import { bsContextStyle, BS_CONTEXT_NAMES, BS_CONTEXTS } from '../../utils';

const {
  getClassSet,
  prefix,
  splitBsProps,
} = utils.bootstrapUtils;

const { bsStyle, ...AlertRBSprops } = AlertRBS.propTypes;
const propTypes = {
  ...AlertRBSprops,
  ...[
    BS_CONTEXT_NAMES.SUCCESS,
    BS_CONTEXT_NAMES.INFO,
    BS_CONTEXT_NAMES.WARNING,
    BS_CONTEXT_NAMES.DANGER,
  ].reduce((aggr, d) => ({ ...aggr, [d]: PropTypes.bool }), {})
};

function alertHOC(Component) {
  return class Alert extends Component {
    static displayName = 'AlertCWDS';
    static contextIcons = {
      [BS_CONTEXT_NAMES.SUCCESS]:   'check-circle',
      [BS_CONTEXT_NAMES.INFO]:      'info-circle',
      [BS_CONTEXT_NAMES.WARNING]:   'warning',
      [BS_CONTEXT_NAMES.DANGER]:    'warning',
    };
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
            <Icon name={Alert.contextIcons[bsProps.bsStyle]} />
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

const Alert = bsContextStyle(alertHOC(AlertRBS), 'info');

Alert.propTypes = propTypes;
Alert.defaultProps = {};
Alert.displayName = 'Alert';

export default Alert;
