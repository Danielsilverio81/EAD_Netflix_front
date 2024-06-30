/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import styles from "./homeNotAuth.module.scss";
import { Col, Container, Row } from "reactstrap";
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
      <div className={styles.sectionBackground}>
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
            <Link className={styles.links} href="/login">
              <Button style={styles.navBtn}>{buttonForLogin}</Button>
            </Link>
            <Link className={styles.links} href="/register">
              <Button style={styles.navBtn}>{buttonForRegister}</Button>
            </Link>
          </div>
        </Container>
        <Container className="py-4">
          <Row>
            <Col md className="d-flex flex-column justify-content-center align-items-start">
              <p className={styles.subtitle}>Acesso Ilimitado</p>
              <p className={styles.title}>
                Tenha acesso aos melhores <br /> tutoriais de programação.
              </p>
              <p className={styles.description}>
                Estude de onde estiver a qualquer momento, e continue <br />{" "}
                evoluindo como programador
              </p>
              <Link className={styles.links} href="/register">
                <Button style={styles.btnCta}>
                  Acesse Agora <img src="/buttonPlay.svg" alt="button img" className={styles.btnImg} />
                </Button>
              </Link>
            </Col>
            <Col md>
            <img src="/homeNoAuth/imgPresentation.png" alt="img Index" className={styles.imgPresentation} />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center pt-5">
            <img src="/homeNoAuth/iconArrowDown.svg" alt="arrow down" className={styles.arrowDown} />
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default HomeNotAuth;
