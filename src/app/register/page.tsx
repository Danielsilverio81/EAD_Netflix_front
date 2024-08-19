import HeaderGeneric from "@/components/Common/headerGeneric";
import styles from "./styles.module.scss"
import { Metadata } from "next";

export const metadata: Metadata = {
    icons: {
      icon: '/favicon.svg'
    },
    title: "OnebitFlix - Registro",
    description: "Tenha acesso aos melhores conteúdos de Programação ",
  };
const Register = () => {
    return (
        <>
        <main>
            <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer Login" />
        </main>
        </>
    )
}

export default Register;