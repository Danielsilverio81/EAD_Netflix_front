"use client";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import profileService from "@/services/profileService";
import ToastComponent from "../../toast";

const FormUserProfile = () => {
  const [color, setColor] = useState<string>("");
  const [toastIsOpen, setToastIsOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState<string>("");
  const [created_at, setCreated_at] = useState<string>("");

  useEffect(() => {
    profileService.fetchCurrent().then((user) => {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phone);
      setEmail(user.email);
      setCreated_at(user.createdAt);
    });
  }, []);

  const handleUserUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await profileService.userUpdate({
      firstName,
      lastName,
      phone,
      email,
      created_at,
    });
    if (res === 200) {
      setToastIsOpen(true);
      setErrorMessage("Dados atualizados com sucesso!");
      setColor("bg-success");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
    } else {
      setToastIsOpen(true);
      setErrorMessage("Você não pode mudar para esse email!");
      setColor("bg-danger");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
    }
  };

  return (
    <>
      <Form onSubmit={handleUserUpdate} className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>
            {firstName.slice(0, 1)}{lastName.slice(0, 1)}
          </p>
          <p className={styles.userName}>{`${firstName} ${lastName}`}</p>
        </div>
        <div className={styles.memberTime}>
          <img
            className={styles.imgMemberTime}
            src="/profile/iconUserAccount.svg"
            alt="iconProfile"
          />
          <p className={styles.memberTimeText}>
            Membro desde <br /> 20 de Abril de 2020
          </p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label} for="firstName">
              NOME:
            </Label>
            <Input
              name="firstName"
              type="text"
              placeholder="Qual o seu Primeiro Nome?"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for="lastName">
              SOBRENOME:
            </Label>
            <Input
              name="lastName"
              type="text"
              placeholder="Qual o seu Sobrenome?"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </FormGroup>
        </div>
        <div className={styles.inputDiv}>
          <FormGroup>
            <Label for="phone">WHATSAPP / TELEGRAM:</Label>
            <Input
              name="phone"
              type="tel"
              placeholder="(XX) 9XXXX-XXXX"
              required
              className={styles.input}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email" className={styles.label}>
              EMAIL:
            </Label>
            <Input
              name="email"
              type="email"
              placeholder="Coloque seu email!"
              required
              className={styles.input}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>
          <Button className={styles.formBtn} outline type="submit">
            Salvar Alterações
          </Button>
        </div>
      </Form>
      <ToastComponent
        color={color}
        isOpen={toastIsOpen}
        message={errorMessage}
      />
    </>
  );
};

export default FormUserProfile;
