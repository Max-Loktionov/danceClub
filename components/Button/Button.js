import PropTypes from "prop-types";
import style from "./button.module.scss";

function Button({ onClick, children }) {
  return (
    <button type="button" onClick={onClick} className={style.button}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
