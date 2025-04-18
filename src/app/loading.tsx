import styles from "../styles/loading.module.scss";

const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.spinner} />
      <p className={styles.loadingText}>Carregando...</p>
    </div>
  );
};

export default LoadingPage;
