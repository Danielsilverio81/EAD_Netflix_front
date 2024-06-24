/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import styles from "./homeNotAuth.module.scss";
import { Container } from "reactstrap";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "Home",
};

const HomeNotAuth = () => {
  const buttonForLogin = "Entrar"
  return (
    <main>
      <div className={styles.ctaSection}>
        <img
          src="/homeNoAuth/logoCta.png"
          alt="Picture of the autor"
          className={styles.imgCta}
        />
        <p>Se Cadastre para ter acesso aos cursos</p>
        <img
          src="/homeNoAuth/logoCta.png"
          alt="Picture of the autor"
          className={styles.imgCta}
        />
      </div>
      <Container>
        <img src="/logoOnebitflix.svg" alt="logo Onebitflix" />
        <div>
          <Button label={buttonForLogin} />
        </div>
      </Container>
    </main>
  );
};

export default HomeNotAuth;
