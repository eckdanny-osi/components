import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import { Checkbox as CheckboxRBS, utils } from 'react-bootstrap';
import { Icon } from '../';

const { getClassSet, prefix, splitBsProps } = utils.bootstrapUtils;

const pretty = Component => {
  return class Pretty extends Component {
    static displayName = 'CWDS';
    static propTypes = Component.propTypes;
    static defaultProps = Component.defaultProps;
    render() {
      const {
        inline,
        disabled,
        validationState,
        inputRef,
        className,
        style,
        title,
        children,
        ...props
      } = this.props;

      const [bsProps, elementProps] = splitBsProps(props);

      const input = (
        <input
          {...elementProps}
          ref={inputRef}
          type="checkbox"
          disabled={disabled}
        />
      );

      if (inline) {
        const classes = {
          [prefix(bsProps, 'inline')]: true,
          disabled,
        };

        // Use a warning here instead of in propTypes to get better-looking
        // generated documentation.
        warning(
          !validationState,
          '`validationState` is ignored on `<Checkbox inline>`. To display ' +
            'validation state on an inline checkbox, set `validationState` on a ' +
            'parent `<FormGroup>` or other element instead.'
        );

        return (
          // <label
          //   className={classNames(className, classes)}
          //   style={style}
          //   title={title}
          // >
          //   {input}
          //   {children}
          // </label>
          <div
            className={classNames(
              className,
              classes,
              'pretty',
              'p-icon'
              // 'p-smooth'
            )}
          >
            {input}
            <div className="state p-primary">
              <Icon className="icon" name="check" />
              <label>{children}</label>
            </div>
          </div>
        );
      }

      const classes = {
        ...getClassSet(bsProps),
        disabled,
      };
      if (validationState) {
        classes[`has-${validationState}`] = true;
      }

      return (
        // <div className={classNames(className, classes)} style={style}>
        //   <label title={title}>
        //     {input}
        //     {children}
        //   </label>
        // </div>
        <div
          className={classNames(
            className,
            classes,
            'pretty',
            'p-icon'
            // 'p-smooth'
          )}
        >
          {/* <input type="checkbox" /> */}
          {input}
          {/* <div className="state p-primary"> */}
          <div
            className={classNames('state', {
              // 'p-primary': validationState
              'p-success': 'success' === validationState,
              // 'p-info':
              'p-warning': 'warning' === validationState,
              'p-danger': 'error' === validationState,
            })}
          >
            <Icon className="icon" name="check" />
            <label>{children}</label>
          </div>
        </div>
      );
    }
  };
};

export default pretty(CheckboxRBS);

//
//
//

// const { getClassSet, prefix, splitBsProps } = utils.bootstrapUtils;

// const propTypes = {
//   ...CheckboxRBS.propTypes,
// };

// const defaultProps = {
//   ...CheckboxRBS.propTypes,
// };

// const Checkbox = ({
//   inline,
//   disabled,
//   validationState,
//   inputRef,
//   className,
//   style,
//   title,
//   children,
//   ...props
// }) => {
//   const [bsProps, elementProps] = splitBsProps(props);
//   const input = (
//     <input
//       {...elementProps}
//       ref={inputRef}
//       type="checkbox"
//       disabled={disabled}
//     />
//   );

//   if (inline) {
//     const classes = { [prefix(bsProps, 'inline')]: true, disabled };
//     return (
//       // <div className="pretty p-icon p-smooth">
//       //   <input type="checkbox" />
//       //   <div className="state p-primary">
//       //     <Icon className="icon" name="check" />
//       //     <label title={title}>{children}</label>
//       //   </div>
//       // </div>
//       <label
//         className={classNames(className, classes)}
//         style={style}
//         title={title}
//       >
//         {input}
//         {children}
//       </label>
//     );
//   }

//   const classes = {
//     ...getClassSet(bsProps),
//     disabled,
//   };
//   if (validationState) {
//     classes[`has-${validationState}`] = true;
//   }

//   // return (
//   //   <div className={classNames(className, classes)} style={style}>
//   //     <label title={title}>
//   //       {input}
//   //       {children}
//   //     </label>
//   //   </div>
//   // );
//   return (
//     <div className="pretty p-icon p-smooth">
//       <input type="checkbox" />
//       <div className="state p-primary">
//         <Icon className="icon" name="check" />
//         <label>{children}</label>
//       </div>
//     </div>
//   );
// };

// Checkbox.propTypes = propTypes;
// Checkbox.defaultProps = defaultProps;

// export default Checkbox;
