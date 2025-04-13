import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.loveSection}>
          <p className={styles.text}>
            With love, Tom & Gérry <span className={styles.heart}>♥</span>
          </p>
          <p className={styles.smallText}>© Thomas D'Astolto 2025</p>
        </div>

        <div className={styles.infoSection}>
          <h4 className={styles.infoTitle}>Tom's witnesses</h4>
          <ul className={styles.contactList}>
            <li>
              <strong>Anka:</strong> +49 17620202841
            </li>
            <li>
              <strong>Tabea:</strong> +49 17664966479
            </li>
            <li>
              <strong>Tabea:</strong> +49 17664966479
            </li>
          </ul>
        </div>
        <div className={styles.infoSection}>
          <h4 className={styles.infoTitle}>Geri's witnesses</h4>
          <ul className={styles.contactList}>
            <li>
              <strong>Anka:</strong> +49 17620202841
            </li>
            <li>
              <strong>Tabea:</strong> +49 17664966479
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
