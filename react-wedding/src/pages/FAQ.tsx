import React from "react";
import styles from "../styles/faq.module.css";

function FAQ() {
  return (
    <div className={styles.faqWrapper}>
      <h1 className={styles.faqTitle}>FAQ</h1>

      <div className={styles.faqItem}>
        <h3 className={styles.question}>Gibt es einen Dresscode?</h3>
        <p className={styles.answer}>
          Kommt einfach wie ihr euch am wohlsten fühlt – ob schick und classy,
          sommerlich-leger oder mit einem Hauch Romantik. Wir lieben die
          Vielfalt. ✨
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.question}>Was geht in Ulm?</h3>
        <p className={styles.answer}>
          Mehr als man vielleicht erstmal denkt. Falls ihr vor oder nach der
          Feier noch motiviert seid, Ulm zu erkunden, gibt es einige gute Bars
          und Lokale oder schöne Ecken, die wir wärmstens empfehlen können.
          Priorität Nr. 1 ist natürlich der Aufstieg auf den höchsten Kirchturm
          der Welt - das könnt ihr euch ja für Sonntagmorgen vornehmen. 😁 Kommt
          einfach auf uns und wir geben euch die heißesten Tipps der Stadt.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.question}>Geschenkwünsche?</h3>
        <p className={styles.answer}>
          Dabeisein ist bekanntlich alles und eure Gesellschaft ist für uns das
          größte Geschenk! Falls ihr uns darüber hinaus noch eine Freude machen
          wollt, freuen wir uns riesig über einen kleinen Beitrag zu unserer
          Hochzeitsreise nach Japan - so kann Geri endlich in Sushi und Ramen
          schwelgen und Tom im Manga- und Anime-Paradies abtauchen. 🇯🇵
        </p>
      </div>
    </div>
  );
}

export default FAQ;
