import { ReactElement } from 'react';
import './Button.scss';

const Button = ({
  children,
  onClick,
  buttonStyleType,
  ...props
}: any): ReactElement => {
  return (
    <button onClick={onClick} className={`btn ${buttonStyleType}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
