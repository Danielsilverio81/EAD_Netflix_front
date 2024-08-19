import { Container } from "reactstrap";
import styles from "./headerGeneric.module.scss"
import Link from "next/link";
import Button from "@/components/ButtonComponent";

interface props {
    logoUrl: string;
    btnContent: string;
    btnUrl: string;
}

const HeaderGeneric = ({logoUrl, btnContent, btnUrl}: props) => {
    return (
        <>
        <div className={styles.header}>
            <Container className={styles.headerContainer}>
                <Link href={logoUrl}>
                <img src="/logoOnebitflix.svg" alt="logo Register" className={styles.headerLogo}/>
                </Link>
                <Link href={btnUrl}>
                <Button style={styles.headerBtn}>{btnContent}</Button>
                </Link>
            </Container>
        </div>
        </>
    )
};

export default HeaderGeneric;