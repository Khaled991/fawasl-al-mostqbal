import { ReactElement } from 'react';
import './Button.scss';

const Button = ({
  children,
  onClick,
  buttonStyleType,
  style,
}: any): ReactElement => {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonStyleType}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
