import P from 'prop-types';
import './styles.css';

export const Button = ({ text, Click, disabled = false }) => (
  <button className="button" onClick={Click} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  Click: P.func.isRequired,
  disabled: P.bool,
};
