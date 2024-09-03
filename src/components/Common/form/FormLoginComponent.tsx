"use client";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "./formStyles.module.scss";

const FormLoginComponent = () => {
  return (
    <>
      <Container className="py-5">
        <p className={styles.formTitle}>Bem-vindo(a) de Volta!</p>
        <Form className={styles.form}>
          <p className="text-center">
            <strong>Bem-Vindo(a) ao OneBitFlix!</strong>
          </p>
          <FormGroup>
            <Label for="email" className={styles.label}>
              E-mail
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Qual o seu email?"
              required
              className={styles.input}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password" className={styles.label}>
              SENHA
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Qual a sua Senha?"
              required
              className={styles.input}
            />
          </FormGroup>
          <Button outline className={styles.formBtn}>
            ENTRAR
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormLoginComponent;
