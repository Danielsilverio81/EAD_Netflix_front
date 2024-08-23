import { Container } from "reactstrap"
import styles from "./footer.module.scss"

const FooterComponent = () => {
    return (
        <>
          <Container className={styles.footer}>
          <img
            src="/logoOnebitcode.svg"
            alt="Logo footer"
            className={styles.footerLogo}
          />
          <a
            href="http://onebitcode.com"
            target={"_blank"}
            className={styles.footerLink}
          >
            ONEBITCODE.COM
          </a>
        </Container>
        </>
    )
}

export default FooterComponent;