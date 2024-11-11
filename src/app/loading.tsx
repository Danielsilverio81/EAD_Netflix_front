import styles from "../styles/loading.module.scss"
export default function Loading() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sectionLoading}>
            <p className={styles.titleLoading}>Loading Page</p>
            <div className={styles.loader}>
              <div className={styles.loaderDot}></div>
              <div className={styles.loaderDot}></div>
              <div className={styles.loaderDot}></div>
            </div>
        </div>
      </div>
    </>
  );
}
