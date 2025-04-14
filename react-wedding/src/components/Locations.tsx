import { Col, Container, Row } from "react-bootstrap";
import pic from "../images/Standesamt.jpg";
import garden1 from "../images/IMG_8989.jpg";
import garden2 from "../images/IMG_8990.jpg";
import styles from "../styles/location.module.css";
import { TranslationLang } from "../pages/Accomodations";
import { useLanguage } from "../context/LanguageContext";

const locationsTranslations: Record<
  TranslationLang,
  { description1: string; description2: string; address: string }
> = {
  en: {
    description1:
      "The ceremony will take place at the Standesamt in Ulm at 11:20. Due to space limitations, only a small group can join us inside for the civil ceremony. But don't worry - it will be short and sweet, and right after, we'll gather for a prosecco toast together, either just outside or at a nearby bar.",
    description2:
      "After the ceremony, the celebration continues at Ger's parents' place, where we'll enjoy good food, drinks and music in their beautiful garden. The amazing team from Anomal will treat us to delicious Italian specialties and drinks. And to top it all off - we'll wrap up the evening with a proper party and live DJ set in the garage!",

    address: "Address",
  },
  it: {
    description1:
      "La cerimonia si terrà alle 11:20 presso il municipio (Standesamt) di Ulm. A causa dello spazio limitato, solo un piccolo gruppo potrà assistere alla cerimonia civile. Ma niente paura: durerà circa 20–30 minuti, e subito dopo ci ritroveremo tutti insieme per un brindisi, proprio fuori dal municipio o in un bar lì vicino.",

    description2:
      "Dopo la cerimonia, la festa continua a casa dei genitori di Geri, dove potremo goderci del buon cibo, bevande e musica nel loro splendido giardino. Il fantastico team di Anomal ci delizierà con specialità italiane e drink. E per chi si reggerà ancora in piedi: DJ set in garage per concludere la serata in bellezza!",

    address: "Indirizzo",
  },
  de: {
    description1:
      "Die Zeremonie findet um 11:20 Uhr im Standesamt in Ulm statt. Aufgrund begrenzter Platzkapazitäten kann uns nur eine kleine Gruppe zur standesamtlichen Trauung begleiten. Aber keine Sorge – sie wird kurz und schön, und direkt danach stoßen wir gemeinsam mit einem Glas Prosecco an, entweder direkt vor dem Standesamt oder in einer nahegelegenen Bar.",

    description2:
      "Nach der Zeremonie geht die Feier bei Gers Eltern weiter, wo wir in ihrem wunderschönen Garten gutes Essen, Getränke und Musik genießen. Das fantastische Team von Anomal wird uns mit köstlichen italienischen Spezialitäten und Drinks verwöhnen. Und zum krönenden Abschluss des Abends feiern wir eine richtige Party mit Live-DJ-Set in der Garage!",

    address: "Adresse",
  },
};

function Locations() {
  const { language } = useLanguage();
  const { description1, description2, address } =
    locationsTranslations[language as TranslationLang] ||
    locationsTranslations.en;
  return (
    <Container fluid="md" style={{ paddingBottom: "4rem" }}>
      <Row className={styles.topContainer} xs={1} md={2}>
        <Col className={styles.standesamtInfo}>
          <h2 className={styles.sectionTitle}>Standesamt Ulm</h2>
          <p className={styles.sectionText}>{description1}</p>
          <p className={styles.sectionText}>
            <strong>{address}:</strong> Marktpl. 1, 89073 Ulm
          </p>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <img className={styles.locationPic} src={pic} alt="Standesamt Ulm" />
        </Col>
      </Row>

      <Row className={styles.bottomContainer} xs={1} md={2} lg={3}>
        <Col>
          <img src={garden1} alt="Garden view" className={styles.gardenPic} />
        </Col>
        <Col>
          <img src={garden2} alt="Garden view" className={styles.gardenPic} />
        </Col>
        <Col className={styles.gardenInfo}>
          <h2 className={styles.sectionTitle}>Garden Party</h2>
          <p className={styles.sectionText}>{description2}</p>
          <p className={styles.sectionText}>
            <strong>Address:</strong> Safranberg 12, 89075 Ulm
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Locations;
