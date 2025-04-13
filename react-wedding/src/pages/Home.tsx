import hug from "../images/hug.png";
import beach from "../images/canva.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Countdown from "../components/Countdown";
import styles from "../styles/home.module.css";
import Locations from "../components/Locations";
import { useLanguage } from "../context/LanguageContext";
import { TranslationLang } from "./Accomodations";

const homeTranslations: Record<TranslationLang, { description: string }> = {
  en: {
    description: `Woho, the time has come! Tom & Gérry are finally tying the knot — and that in the fateful 7th year! We want to spend this special day with you and are looking forward to an amazing mix of Italians, Swiss, Swabians, and the crazy Berliners! Eight years ago at Kotti in Berlin, Tom surely wouldn’t have guessed that one day he’d be getting married in Ulm — but hey, life happens! We're looking forward to celebrating this beautiful day in our garden — true to the motto: “Italy meets Schwaben.”`,
  },
  it: {
    description: `Ci siamo: Tom & Gérry si sposano! Siamo felicissimi di poter condividere questo giorno così importante con voi e di festeggiare insieme a un mix meraviglioso di italiani, tedeschi, svizzeri, berlinesi e pescaresi! Otto anni fa, Tom non avrebbe certo immaginato che un giorno si sarebbe sposato proprio a Ulm, nel cuore della Svevia. Ma si sa, la vita è piena di sorprese! Proprio per questo non vediamo l’ora di accogliervi nel nostro giardino e brindare tutti insieme, sotto il segno del nostro motto: “Italy meets Schwaben”.`,
  },
  de: {
    description: `Woho es ist soweit! Tom & Gérry geben sich das Ja-Wort und haben sich endlich lieb – und das im verflixten 7. Jahr! Diesen besonderen Tag wollen wir mit euch verbringen und freuen uns auf einen kunterbunten Mix aus Italianos, Schweizern, Schwaben und den loco Berlinern! Vor 8 Jahren am Kotti in Berlin hätte Tom sicherlich nicht gedacht, dass er eines Tages im Schwabenländle in Ulm heiraten wird – life happens! Umso mehr freuen wir uns heute auf ein wunderschönes Fest bei uns im Garten – ganz dem Motto “Italy meets Schwaben.”`,
  },
};

function Home() {
  const { language } = useLanguage();
  const { description } =
    homeTranslations[language as TranslationLang] || homeTranslations.en;

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #fff0f5, #e0f7fa)" }}>
        <Container
          fluid="md"
          style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
        >
          <Row className="align-items-center">
            <Col md={6} className={styles.homeInfo}>
              <h1 className={styles.mainH1}>Ci sposiamo!</h1>
              <img
                className={styles.hugPic}
                src={hug}
                alt="image of tom and jerry hugging"
              />
              <p className={styles.mainP}>{description}</p>
            </Col>

            <Col md={6}>
              <div className={styles.pictureContainer}>
                <img
                  className={styles.homePicture}
                  src={beach}
                  alt="picture of tom and geri at the beach"
                />
              </div>
              <Countdown />
            </Col>
          </Row>
        </Container>
      </div>
      <Locations />
    </>
  );
}

export default Home;
