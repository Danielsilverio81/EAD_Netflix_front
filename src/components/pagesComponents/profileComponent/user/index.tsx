"use client";
import FormUserProfile from "@/components/Common/forms/formProfileUser";
import HeaderAuthComponent from "../../headerAuthComponent";
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";

const UserForm = () => {
  return (
    <>
      <div className={styles.header}>
        <HeaderAuthComponent />
      </div>
      <Container className="py-5">
        <p className={styles.title}>Minha Conta</p>
        <Row className="pt-3 pb-5">
          <Col md={4} className={styles.btnColumn}>
          <Button className={styles.renderForm}>
            DADOS PESSOAIS
          </Button>
          <Button className={styles.renderForm}>
            SENHA
          </Button>
          </Col>
          <Col>
            <FormUserProfile />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserForm;
