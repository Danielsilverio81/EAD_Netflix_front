"use client";
import { Form, Input } from "reactstrap";
import styles from "./formHomeAuthStyles.module.scss";

const FormHomeAuth = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <Form>
          <Input
            name="search"
            type="search"
            placeholder="Pesquisar"
            className={styles.input}
          />
        </Form>
        <img
          src="/homeAuth/iconSearch.svg"
          alt="lupa Header"
          className={styles.searchImg}
        />
        <p className={styles.userProfile}>AB</p>
      </div>
    </>
  );
};

export default FormHomeAuth;
