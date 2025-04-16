import { useLanguage } from "../context/LanguageContext";
import { TranslationLang } from "../pages/Accomodations";
import styles from "../styles/footer.module.css";

const footerTranslation: Record<
  TranslationLang,
  { witnessesTom: string; witnessesGeri: string }
> = {
  en: {
    witnessesTom: "Tom's witnesses",
    witnessesGeri: "Geri's witnesses",
  },
  it: { witnessesTom: "Testimoni Tom", witnessesGeri: "Testimoni Geri" },
  de: {
    witnessesTom: "Tom's Trauzeugen",
    witnessesGeri: "Geri's Trauzeuginnen",
  },
};

function Footer() {
  const { language } = useLanguage();
  const { witnessesGeri, witnessesTom } =
    footerTranslation[language as TranslationLang] || footerTranslation.en;
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
          <h4 className={styles.infoTitle}>{witnessesTom}</h4>
          <ul className={styles.contactList}>
            <li>
              <strong>Daniele:</strong> +39 3451349563
            </li>
            <li>
              <strong>Alen:</strong> +39 3476983210
            </li>
            <li>
              <strong>Francesco:</strong> +49 17663700696
            </li>
          </ul>
        </div>
        <div className={styles.infoSection}>
          <h4 className={styles.infoTitle}>{witnessesGeri}</h4>
          <ul className={styles.contactList}>
            <li>
              <strong>Anka:</strong> +49 17631357072
            </li>
            <li>
              <strong>Tabea:</strong> +49 17663443148
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
