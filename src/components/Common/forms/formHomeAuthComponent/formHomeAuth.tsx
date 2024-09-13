"use client";
import { Form, Input } from "reactstrap";
import styles from "./formHomeAuthStyles.module.scss";
import Modal from "react-modal";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

Modal.setAppElement("body")

const FormHomeAuth = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    router.push("/")
  };
  return (
    <>
      <div className="d-flex align-items-center">
        <Form>
          <Input
            name="search"
            type="search"
            placeholder="Pesquisar"
            className={styles.input}
          />
        </Form>
        <img
          src="/homeAuth/iconSearch.svg"
          alt="lupa Header"
          className={styles.searchImg}
        />
        <p className={styles.userProfile} onClick={handleOpenModal}>
          AB
        </p>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnEsc={true}
        className={styles.modal}
        overlayClassName={styles.overlayModal}
      >
        <Link href="/profile" className={styles.link}>
          <p className={styles.modalLink}>Meus Dados</p>
        </Link>
        <p className={styles.modalLink} onClick={handleLogout}>Sair</p>
      </Modal>
    </>
  );
};

export default FormHomeAuth;
