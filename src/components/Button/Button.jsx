import { Button as ButtonRBS } from 'react-bootstrap';
import {
  bsContextStyle, BS_CONTEXTS,
  bsSizeHOC
} from '../../utils';

const Button = (
  bsContextStyle(
    ButtonRBS, 'default', [...BS_CONTEXTS, 'link']
  )
);
Button.propTypes = { ...ButtonRBS.propTypes };
Button.displayName = 'Button';

export default Button;
