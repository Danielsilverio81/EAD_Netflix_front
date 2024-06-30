"use client";
import { Button as ReactstrapButton } from "reactstrap";
import styles from "../app/homeNotAuth.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  style: string
}

const Button: React.FC<ButtonProps> = ({ children, style }) => {
  return (
    <>
      <ReactstrapButton className={style} outline>
        {children}
      </ReactstrapButton>
    </>
  );
};

export default Button;
