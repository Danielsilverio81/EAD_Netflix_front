/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import styles from "./homeNotAuth.module.scss";
import { Container } from "reactstrap";
import Button from "@/components/ButtonComponent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

const HomeNotAuth = () => {
  const buttonForLogin = "Entrar";
  const buttonForRegister = "Quero fazer Parte";
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
      <Container className={styles.nav}>
        <img
          src="/logoOnebitflix.svg"
          alt="logo Onebitflix"
          className={styles.imgLogoNav}
        />
        <div>
          <Link href="/login"><Button label={buttonForLogin} /></Link>
          <Link href="/register"><Button label={buttonForRegister} /></Link>
        </div>
      </Container>
    </main>
  );
};

export default HomeNotAuth;
