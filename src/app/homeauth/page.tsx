import { Metadata } from "next";
import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import FormHomeAuth from "@/components/Common/forms/formHomeAuthComponent/formHomeAuth";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "EAD-flix Home",
};

const HomeAuth = () => {
  return (
    <>
      <main>
        <Container className={styles.nav}>
          <Link href="/homeauth">
            <img
              src="/logoOnebitflix.svg"
              alt="logo"
              className={styles.imgLogoNav}
            />
          </Link>
        <FormHomeAuth/>
        </Container>
      </main>
    </>
  );
};

export default HomeAuth;
