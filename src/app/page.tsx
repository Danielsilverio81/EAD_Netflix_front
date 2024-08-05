/* eslint-disable @next/next/no-img-element */
import next, { Metadata } from "next";
import styles from "./homeNotAuth.module.scss";
import { Col, Container, Row } from "reactstrap";
import Button from "@/components/ButtonComponent";
import Link from "next/link";
import SlideComponent from "@/components/Common/slideComponent";
import CourseService, { CourseType } from "@/services/courseService";
import { ReactNode } from "react";

interface IndexPageProps {
  children?: ReactNode
  course: CourseType[];
}

export const revalidate = 3600 * 24

export const metadata: Metadata = {
  title: "Home",
};

const HomeNotAuth = async({course}: IndexPageProps) => {
  const buttonForLogin = "Entrar";
  const buttonForRegister = "Quero fazer Parte";
  const buttonForSlide = "Se cadastre para acessar"

  const res = await CourseService.getNewestCourses();
  
  course = res.data;
  

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
            <Col
              md
              className="d-flex flex-column justify-content-center align-items-start"
            >
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
                  Acesse Agora{" "}
                  <img
                    src="/buttonPlay.svg"
                    alt="button img"
                    className={styles.btnImg}
                  />
                </Button>
              </Link>
            </Col>
            <Col md>
              <img
                src="/homeNoAuth/imgPresentation.png"
                alt="img Index"
                className={styles.imgPresentation}
              />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center pt-5">
              <img
                src="/homeNoAuth/iconArrowDown.svg"
                alt="arrow down"
                className={styles.arrowDown}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
      <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
        <div className={styles.card1}>
          <p className={styles.cardTitle}>Front-End</p>
          <p className={styles.cardDescription}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
            ter acesso às práticas avançadas de programação, atualizações de
            tecnologias e todo o suporte técnico necessário para ser um sênior
            na programação.
          </p>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>Back-End</p>
          <p className={styles.cardDescription}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
            ter acesso às práticas avançadas de programação, atualizações de
            tecnologias e todo o suporte técnico necessário para ser um sênior
            na programação.
          </p>
        </div>
        <div className={styles.card3}>
          <p className={styles.cardTitle}>Mobile</p>
          <p className={styles.cardDescription}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
            ter acesso às práticas avançadas de programação, atualizações de
            tecnologias e todo o suporte técnico necessário para ser um sênior
            na programação.
          </p>
        </div>
        <div className={styles.card4}>
          <p className={styles.cardTitle}>Git e GitHub</p>
          <p className={styles.cardDescription}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
            ter acesso às práticas avançadas de programação, atualizações de
            tecnologias e todo o suporte técnico necessário para ser um sênior
            na programação.
          </p>
        </div>
        <div className={styles.card5}>
          <p className={styles.cardTitle}>Projetos</p>
          <p className={styles.cardDescription}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
            ter acesso às práticas avançadas de programação, atualizações de
            tecnologias e todo o suporte técnico necessário para ser um sênior
            na programação.
          </p>
        </div>
        <div className={styles.card6}>
          <p className={styles.cardTitle}>Carreira</p>
          <p className={styles.cardDescription}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
            ter acesso às práticas avançadas de programação, atualizações de
            tecnologias e todo o suporte técnico necessário para ser um sênior
            na programação.
          </p>
        </div>
      </Container>
      <Container fluid className="d-flex flex-column align-items-center py-5">
        <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
        <SlideComponent course={course}/>
        <Link href="/register">
        <Button style={styles.slideSectionBtn}>{buttonForSlide}</Button>
        </Link>
      </Container>
    </main>
  );
};

export default HomeNotAuth;
