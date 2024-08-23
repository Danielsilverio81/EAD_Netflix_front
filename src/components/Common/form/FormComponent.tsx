"use client";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "./formStyles.module.scss";
// @ts-expect-error
import InputMask from "react-input-mask";

const FormComponent = () => {
  return (
    <>
      <Container className="py-5">
        <p className={styles.formTitle}>Bem-vindo(a) ao OneBitFlix!</p>
        <Form className={styles.form}>
          <p className="text-center">
            <strong>Bem-vindo(a) ao OneBitFlix!</strong>{" "}
          </p>
          <FormGroup>
            <Label for="firstName" className={styles.label}>
              NOME
            </Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Qual o seu nome?"
              required
              maxLength={20}
              className={styles.inputName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName" className={styles.label}>
              SOBRENOME
            </Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Qual o seu Sobrenome?"
              required
              maxLength={20}
              className={styles.inputName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone" className={styles.label}>
              WHATSAPP / TELEGRAM
            </Label>
            <InputMask mask="+55 (99) 99999-9999">
              {() => (
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="(xx) 9xxxx-xxxx"
                  required
                  className={styles.input}
                />
              )}
            </InputMask>
          </FormGroup>
          <FormGroup>
            <Label for="email" className={styles.label}>
              E-MAIL
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu E-mail"
              required
              className={styles.input}
            />
          </FormGroup>
          <FormGroup>
            <Label for="birth" className={styles.label}>
              DATA DE NASCIMENTO
            </Label>
            <Input
              id="birth"
              name="birth"
              type="date"
              placeholder="Digite seu E-mail"
              min="1930-01-01"
              max="2022-12-31"
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
              placeholder="Digite sua Senha (Min: 6 | Max: 20)"
              required
              minLength={6}
              maxLength={20}
              className={styles.input}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password" className={styles.label}>
              CONFIRME SUA SENHA
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Confirme sua Senha"
              required
              minLength={6}
              maxLength={20}
              className={styles.input}
            />
          </FormGroup>
          <Button  type="submit" outline className={styles.formBtn}>
            CADASTRAR
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormComponent;
