import HeaderGeneric from "@/components/Common/headerGeneric";
import { Metadata } from "next";
import FormComponent from "@/components/Common/form/FormComponent";
import FooterComponent from "@/components/Common/footer/FooterComponent";
import styles from "./styles.module.scss"

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "OnebitFlix - Registro",
  description: "Tenha acesso aos melhores conteúdos de Programação ",
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
