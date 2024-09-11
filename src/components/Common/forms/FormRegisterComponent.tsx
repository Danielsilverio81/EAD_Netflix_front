"use client";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "./formStyles.module.scss";
// @ts-expect-error
import InputMask from "react-input-mask";
import { FormEvent, useEffect, useState } from "react";
import authService from "@/services/authService";
import { useRouter } from "next/navigation";
import ToastComponent from "../toast";

const FormComponent = () => {
  const router = useRouter();
  const [toastIsOpen, setToastIsOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() => {
    if(sessionStorage.getItem("eadflix-token")) {
      router.push("/homeauth")
    }
  }, [])

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName")!.toString();
    const lastName = formData.get("lastName")!.toString();
    const phone = formData.get("phone")!.toString();
    const birth = formData.get("birth")!.toString();
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const confirmPassword = formData.get("confirmPassword")!.toString();
    const params = { firstName, lastName, phone, birth, email, password };

    if (password != confirmPassword) {
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 + 5);
      setToastMessage("Senha e Confirmação diferentes");

      return;
    }
    const { data, status } = await authService.register(params);

    if (status === 201) {
      router.push("/login?registred=true");
      router.refresh();
    } else {
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 + 5);
      setToastMessage(data.message);
    }
  };
  return (
    <>
      <Container className="py-5">
        <p className={styles.formTitle}>Bem-vindo(a) ao OneBitFlix!</p>
        <Form className={styles.form} onSubmit={handleRegister}>
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
            <Label for="confirmPassword" className={styles.label}>
              CONFIRME SUA SENHA
            </Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua Senha"
              required
              minLength={6}
              maxLength={20}
              className={styles.input}
            />
          </FormGroup>
          <Button type="submit" outline className={styles.formBtn}>
            CADASTRAR
          </Button>
        </Form>
      </Container>
      <ToastComponent color="bg-danger" isOpen={toastIsOpen} message={toastMessage}/>
    </>
  );
};

export default FormComponent;
