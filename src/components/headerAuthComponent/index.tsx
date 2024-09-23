import Link from "next/link";
import { Container } from "reactstrap";
import FormHomeAuth from "../Common/forms/formHomeAuthComponent/formHomeAuth";
import styles from "./styles.module.scss";

const HeaderAuthComponent = () => {
  return (
    <>
      <Container className={styles.nav}>
        <Link href="/homeauth">
          <img
            src="/logoOnebitflix.svg"
            alt="logo"
            className={styles.imgLogoNav}
          />
        </Link>
        <FormHomeAuth />
      </Container>
    </>
  );
};

export default HeaderAuthComponent;
