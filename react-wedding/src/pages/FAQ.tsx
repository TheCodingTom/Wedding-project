import { useLanguage } from "../context/LanguageContext";
import styles from "../styles/faq.module.css";
import { TranslationLang } from "./Accomodations";

const FAQTranslations: Record<
  TranslationLang,
  {
    dresscodeQ: string;
    dresscodeA: string;
    UlmQ: string;
    UlmA: string;
    giftsQ: string;
    giftsA: string;
    witnessQ: string;
    witnessA: string;
  }
> = {
  en: {
    dresscodeQ: "Is there a dresscode?",
    dresscodeA:
      "Come however you feel most comfortable – whether it’s chic and classy or summery and casual! We love diversity. ✨",
    UlmQ: "What's there to do in Ulm?",
    UlmA: "More than you might think at first. If you’re motivated to explore Ulm before or after the celebration, there are some great bars and restaurants, or beautiful spots we highly recommend. The number one priority is of course climbing the tallest church tower in the world – that would be the perfect Sunday morning activity 😁 Just come to us, and we’ll give you the hottest tips in town.",
    giftsQ: "Do you have gift wishes?",
    giftsA:
      "Being there with us is the greatest gift! If you’d like to make us even happier, we’d be thrilled with a small contribution to our honeymoon in Japan – so Geri can finally indulge in sushi and ramen, and Tom can dive into the manga and anime paradise. 🇯🇵",
    witnessQ: "Who are the witnesses?",
    witnessA:
      "If you have questions or anything else that we shouldn't know about, you can contact our witnesses. Geri's witnesses are Anka and Tabea, while Tom's are Alen, Daniele and Francesco. You can find their contacts in the website footer. ",
  },
  it: {
    dresscodeQ: "Qual è il dress code?",
    dresscodeA: `Non c'è un vero e proprio dress code, quindi sentitevi liberi di indossare ciò che volete. Che scegliate un look elegante o un outfit più estivo e casual, per noi andrà benissimo. Come si dice in inglese, dato che l'italiano me lo sto dimenticando "Come as you are!" ✨`,
    UlmQ: "Cosa fare a Ulm?",
    UlmA: "Molto più di quanto pensiate! Se vi va di esplorare la città prima o dopo la festa, possiamo consigliarvi alcuni bar e ristoranti tipici che potrebbero sorprendervi. La priorità è sicuramente salire sul duomo di Ulm, il più alto del mondo (un'ottima idea per riprendersi la domenica mattina) 😁 Se avete delle domande in generale, chiedete pure a noi!",
    giftsQ: "Avete desideri specifici per i regali?",
    giftsA:
      "La vostra presenza è già il regalo principale! Se volete supportarci con qualcosa in più, saremo lieti di accettare un contributo per il nostro viaggio di nozze in Giappone – così Geri potrà finalmente riempirsi di sushi e ramen, e Tom potrà perdersi nel mondo dei manga e degli anime! 🇯🇵",
    witnessQ: "Chi sono i testimoni di nozze?",
    witnessA:
      "Se avete domande o qualsiasi altra cosa che non dovremmo sapere, potete contattare i nostri testimoni. I testimoni di Geri sono Anka e Tabea, mentre quelli di Tom sono Alen, Daniele e Francesco. Potete trovare i loro contatti nel piè di pagina del sito. ",
  },
  de: {
    dresscodeQ: "Is there a dresscode?",
    dresscodeA:
      "Kommt einfach wie ihr euch am wohlsten fühlt – ob schick und classy, sommerlich-leger oder mit einem Hauch Romantik. Wir lieben die Vielfalt. ✨",
    UlmQ: "Was geht in Ulm?",
    UlmA: "Mehr als man vielleicht erstmal denkt. Falls ihr vor oder nach der Feier noch motiviert seid, Ulm zu erkunden, gibt es einige gute Bars und Lokale oder schöne Ecken, die wir wärmstens empfehlen können. Priorität Nr. 1 ist natürlich der Aufstieg auf den höchsten Kirchturm der Welt - das könnt ihr euch ja für Sonntagmorgen vornehmen. 😁 Kommt einfach auf uns und wir geben euch die heißesten Tipps der Stadt.",
    giftsQ: "Habt ihr Geschenkwünsche?",
    giftsA:
      "Dabeisein ist bekanntlich alles und eure Gesellschaft ist für uns das größte Geschenk! Falls ihr uns darüber hinaus noch eine Freude machen wollt, freuen wir uns riesig über einen kleinen Beitrag zu unserer Hochzeitsreise nach Japan -  so kann Geri endlich in Sushi und Ramen schwelgen und Tom ins Manga- und Anime-Paradies abtauchen. 🇯🇵 ",
    witnessQ: "Wer sind die Trauzeugen?",
    witnessA:
      "Wenn ihr Fragen habt oder etwas anderes, das wir nicht wissen sollten, könnt ihr unsere Trauzeugen kontaktieren. Geris Trauzeugen sind Anka und Tabea, während Toms Trauzeugen Alen, Daniele und Francesco sind. Ihr könnt ihre Kontaktdaten im Fußbereich der Website finden.",
  },
};

function FAQ() {
  const { language } = useLanguage();
  const {
    dresscodeA,
    dresscodeQ,
    UlmA,
    UlmQ,
    giftsA,
    giftsQ,
    witnessA,
    witnessQ,
  } = FAQTranslations[language as TranslationLang] || FAQTranslations.en;
  return (
    <div className={styles.faqWrapper}>
      <h1 className={styles.faqTitle}>FAQ</h1>

      <div className={styles.faqItem}>
        <h3 className={styles.question}>{dresscodeQ}</h3>
        <p className={styles.answer}>{dresscodeA}</p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.question}>{UlmQ}</h3>
        <p className={styles.answer}>{UlmA}</p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.question}>{giftsQ}</h3>
        <p className={styles.answer}>{giftsA}</p>
      </div>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>{witnessQ}</h3>
        <p className={styles.answer}>{witnessA}</p>
      </div>
    </div>
  );
}

export default FAQ;
