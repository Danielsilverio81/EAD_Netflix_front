import { Metadata } from "next";
import styles from "../../styles/registerLogin.module.scss";
import HeaderGeneric from "@/components/headerGenericComponent";
import FormLoginComponent from "@/components/Common/forms/FormLoginComponent";
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
