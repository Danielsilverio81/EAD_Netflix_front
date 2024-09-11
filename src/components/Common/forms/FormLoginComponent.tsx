"use client";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "./formStyles.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import ToastComponent from "../toast";
import authService from "@/services/authService";

const FormLoginComponent = () => {
  const router = useRouter();
  const [toastColor, setToastColor] = useState<string>("");
  const [toastIsOpen, setToastIsOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const searchParams = useSearchParams();

  const registerSuccess = searchParams.get("registred");

  useEffect(() => {
    if(sessionStorage.getItem("eadflix-token")) {
      router.push("/homeauth")
    }
  }, [])

  useEffect(() => {
    if (registerSuccess === "true") {
      setToastColor("bg-success");
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 + 5);
      setToastMessage("Cadastro feito com Sucesso!");
    }
  }, [registerSuccess]);
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const params = { email, password };

    const { status } = await authService.login(params);

    if (status === 200) {
      router.push("/homeauth");
    } else {
      setToastColor("bg-danger");
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 + 7);
      setToastMessage("Erro de Email ou senha incorretos!");
    }
  };
  return (
    <>
      <Container className="py-5">
        <p className={styles.formTitle}>Bem-vindo(a) de Volta!</p>
        <Form className={styles.form} onSubmit={handleLogin}>
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
          <Button type="submit" outline className={styles.formBtn}>
            ENTRAR
          </Button>
        </Form>
        <ToastComponent
          color={toastColor}
          isOpen={toastIsOpen}
          message={toastMessage}
        />
      </Container>
    </>
  );
};

export default FormLoginComponent;
