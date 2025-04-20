"use client";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "./styles.module.scss";

const FormUserProfile = () => {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>NT</p>
          <p className={styles.userName}>NAME TEST</p>
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
              value={"Name Teste"}
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
              value={"lastName Teste"}
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
              value={"+55 (21) 99999-9999"}
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
              value={"email@gmail.com"}
            />
          </FormGroup>
          <Button className={styles.formBtn} outline type="submit">
            Salvar Alterações
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormUserProfile;
