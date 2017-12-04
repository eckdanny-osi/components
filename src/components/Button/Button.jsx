import { Button as ButtonRBS } from 'react-bootstrap';
import {
  bsContextStyle, BS_CONTEXTS, BS_CONTEXT_NAMES,
  bsSizeHOC
} from '../../utils';

// const StyledButton = bsContextStyle(ButtonRBS, BS_CONTEXT_NAMES.DEFAULT, [...BS_CONTEXT_NAMES, 'link']);

// const SizedButton = bsSizeHOC(StyledButton);

const Button = bsContextStyle(
  // ButtonRBS,
  bsSizeHOC(ButtonRBS),
  BS_CONTEXT_NAMES.DEFAULT,
  [...BS_CONTEXTS, 'link']
);

// Button.propTypes = { ...ButtonRBS.propTypes };
Button.displayName = 'Button';

export default Button;
