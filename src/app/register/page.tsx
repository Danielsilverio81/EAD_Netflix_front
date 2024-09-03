import HeaderGeneric from "@/components/Common/headerGeneric";
import { Metadata } from "next";
import FormComponent from "@/components/Common/form/FormRegisterComponent";
import FooterComponent from "@/components/Common/footer/FooterComponent";
import styles from "../../styles/registerLogin.module.scss"

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "OnebitFlix - Registro",
};
const Register = () => {
  return (
    <>
      <main className={styles.main}>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/login"
          btnContent="Quero fazer Login"
        />
       <FormComponent/>
       <FooterComponent/>
      </main>
    </>
  );
};

export default Register;
