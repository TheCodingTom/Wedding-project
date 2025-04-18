import hug from "../images/hug.png";
import beach from "../images/canva.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Countdown from "../components/Countdown";
import styles from "../styles/home.module.css";
import Locations from "../components/Locations";
import { useLanguage } from "../context/LanguageContext";
import { TranslationLang } from "./Accomodations";

const homeTranslations: Record<
  TranslationLang,
  { p1: string; p2: string; p3: string; p4: string; motto: string }
> = {
  en: {
    p1: `Woho, the time has come! Tom & Gérry are finally tying the knot — and that in the fateful 7th year! `,
    p2: `Eight years ago at Kotti in Berlin, Tom surely wouldn’t have guessed that one day he’d be getting married in Ulm — but hey, life happens! `,
    p3: `We want to spend this special day with you and are looking forward to an amazing mix of Italians, Swiss, Swabians, and the crazy Berliners! `,
    p4: ` We're looking forward to celebrating this beautiful day in our garden — true to the motto:`,
    motto: `"Italy meets Schwaben."`,
  },
  it: {
    p1: `Ci siamo: Tom & Gérry si sposano! ❤️ `,
    p2: `Siamo felicissimi di poter condividere questo giorno così importante con voi e di festeggiare insieme a un mix meraviglioso di italiani, tedeschi, svizzeri, berlinesi, pescaresi, e chi più ne ha più ne metta!`,
    p3: `Otto anni fa, Tom non avrebbe certo immaginato che un giorno si sarebbe sposato proprio a Ulm, nel bel mezzo della Germania. Ma si sa, la vita è piena di sorprese!`,
    p4: `Ed è proprio per questo che non vediamo l’ora di goderci una giornata memorabile tutti insieme, facendo quello che ci viene meglio (magnà e bev), guidati dal nostro motto:`,
    motto: `"Italy meets Schwaben"`,
  },
  de: {
    p1: `Tom & Gérry geben sich das Ja-Wort – und das im verflixten 7. Jahr! ❤️ `,
    p2: `Wer hätte das gedacht? Damals, vor 8 Jahren am Kotti in Berlin, konnte sich Tom wohl kaum vorstellen, dass er mal im Schwabenländle in Ulm heiraten würde – aber hey, life happens!`,
    p3: `Diesen besonderen Tag wollen wir mit euch feiern – mit einem kunterbunten Mix aus Italianos, Schweizern, Schwaben und den loco Berlinern!`,
    p4: `Wir freuen uns riesig auf ein unvergessliches Fest bei uns im Garten – ganz nach dem Motto:`,
    motto: `"Italy meets Schwaben"`,
  },
};

function Home() {
  const { language } = useLanguage();
  const { p1, p2, p3, p4, motto } =
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
              <p className={styles.mainP}>{p1}</p>
              <p className={styles.mainP}>{p2}</p>
              <p className={styles.mainP}>{p3}</p>
              <p className={styles.mainP}>{p4}</p>
              <p className={styles.mainP}>
                <strong>
                  {" "}
                  <p className={styles.mainP}>{motto}</p>
                </strong>
              </p>
            </Col>

            <Col
              md={6}
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
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
