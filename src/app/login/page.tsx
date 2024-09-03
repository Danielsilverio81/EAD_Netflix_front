import { Metadata } from "next";
import styles from "../../styles/registerLogin.module.scss";
import HeaderGeneric from "@/components/Common/headerGeneric";
import FormLoginComponent from "@/components/Common/form/FormLoginComponent";
import FooterComponent from "@/components/Common/footer/FooterComponent";


export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "OnebitFlix - Login",
};

const Login = () => {
  return (
    <>
      <main className={styles.main}>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/register"
          btnContent="Quero Fazer Parte"
        />
        <FormLoginComponent/>
        <FooterComponent/>
      </main>
    </>
  );
};

export default Login;
