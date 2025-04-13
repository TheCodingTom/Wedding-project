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
          <h4 className={styles.infoTitle}>Contatti utili</h4>
          <ul className={styles.contactList}>
            <li>
              <strong>Tom:</strong> +49 123 456789
            </li>
            <li>
              <strong>Gérry:</strong> +39 987 654321
            </li>
            <li>
              <strong>Email:</strong> tomandgerry@email.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
