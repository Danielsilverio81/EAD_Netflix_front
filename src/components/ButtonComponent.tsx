"use client";
import { Button as ReactstrapButton } from "reactstrap";
import styles from "../app/homeNotAuth.module.scss";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <>
        <ReactstrapButton className={styles.navBtn} outline>
          {label}
        </ReactstrapButton>
    </>
  );
};

export default Button;
