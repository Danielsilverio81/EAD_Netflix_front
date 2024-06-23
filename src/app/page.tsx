import { Metadata } from "next";
import styles from './homeNotAuth.module.scss'
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Home',
}

const HomeNotAuth = () => {
  return (
    <main>
    <div className={styles.ctaSection}>
        <Image
        src="/homeNoAuth/logoCta.png"
        width={30}
        height={30}
        alt="Picture of the autor"
        className={styles.imgCta}
        />
        <p>Se Cadastre para ter acesso aos cursos</p>
        <Image
        src="/homeNoAuth/logoCta.png"
        width={30}
        height={30}
        alt="Picture of the autor"
        className={styles.imgCta}
        />
      </div>
    </main>
  )
}

export default HomeNotAuth;