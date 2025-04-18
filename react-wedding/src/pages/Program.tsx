import "../styles/program.css";
import before from "../images/before.jpg";
import after from "../images/after.jpg";
import { TranslationLang } from "./Accomodations";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";

const programTranslation: Record<
  TranslationLang,
  { title: string; p1: string; p2: string; p3: string; ending: string }
> = {
  en: {
    title: "La dolce (deutsche) vita! - in our garden!",
    p1: `After the ceremony at the Standesamt and the first bubbles, from 1 PM we’ll head to our garden, which we’ll transform into a little Italian paradise – with everything that comes with it. Spritz, pasta e amore – what more could you ask for?
.`,
    p2: `After the ceremony at the Standesamt and the first bubbles, from 1 PM we’ll head to our garden, which we’ll transform into a little Italian paradise – with everything that comes with it. Spritz, pasta e amore – what more could you ask for? We’re looking forward to a lively and joyful celebration where (almost) anything goes: from Italian music bangers, countless spritz, infamous photo booth fails, emotional moments, and wild dance moves, to a colorful mix of languages – Italian, German, English, and probably some Schwäbisch and Pescarese. The most important thing is that we get to celebrate with the people we love and cherish – and that’s you!`,
    p3: `For the party animals among us: when the garden starts to get sleepy, we’ll open the doors to a garage rave with our star DJs Stefan & Zen, Mani Pulite, Max aka Massimo, Lucas, and El Loco Abreu.`,
    ending: `We’re so excited to spend this day with all of you!`,
  },
  it: {
    title: "La dolce (deutsche) vita!",
    p1: `Dopo la cerimonia al municipio di Ulm e le prime bollicine, dalle 13 in poi ci trasferiamo nel nostro giardino, che trasformeremo in un vero e proprio villaggio italiano, con spritz e pasta a volontà!`,
    p2: `Preparatevi per una festa che farà ballare anche la nonna Enia: hit italiane a tutto volume, spritz infiniti (quelli dello zio Claudio), foto epiche da incorniciare, e un mix di lingue che non ha fine: italiano, tedesco, inglese e, ovviamente, abruzzese (quello che nessuno capisce!)`,

    p3: `E per chi si reggerà ancora in piedi, a fine giornata apriremo le porte del nostro garage per un party esclusivo con una line-up che farebbe invidia anche ai club di Berlino: Stefan & Zen, Mani Pulite, Max aka Massimo, Lucas ed El Loco Abreu!`,

    ending: `Non vediamo l’ora di vivere questa giornata insieme a voi!`,
  },
  de: {
    title: "La dolce (deutsche) Vita! - bei uns im Garten!",
    p1: ` Nach der Trauung im Ulmer Standesamt & den ersten Bubbles geht’s ab 13 Uhr zu uns in den Garten, den wir in ein kleines italienisches Paradies verwandeln werden – mit allem, was dazu gehört. Spritz, Pasta e Amore - cosa vuoi di più?  `,
    p2: ` Wir freuen uns auf ein ausgelassenes und fröhliches Fest, bei dem (fast) alles erlaubt ist: von italienischen Music-Bangers, unzähligen Spritz, berühmt-berüchtigten Fotobox-Fails, emotionalen Momenten, wilden Hüftschwüngen, bis hin zu einem bunten Sprachen-Mix aus Italienisch, Deutsch, Englisch oder einfach Händen & Füßen.
Hauptsache, wir dürfen mit den Menschen feiern, die wir lieben und schätzen – und das seid ihr! `,
    p3: ` Für die Feierwütigen unter uns: wenn der Garten langsam schläfrig wird, öffnen wir die Tore zum lauschigen Garagen-Rave mit unseren Star DJs Stefan & Zen, Mani pulite, Max aka Massimo, Lucas und El Loco Abreu. `,
    ending: `Wir freuen uns
              so sehr auf den Tag mit euch!`,
  },
};

function Program() {
  const { language } = useLanguage();
  const { title, p1, p2, p3, ending } =
    programTranslation[language as TranslationLang] || programTranslation.en;

  const [toggled, setToggled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const handleToggle = () => {
    setToggled((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="program-section">
      <h1 className="program-title">Fun Fun Fun</h1>
      <div className="program-container">
        <div className="program-gif-wrapper" onClick={handleToggle}>
          <div className="tooltip-wrapper">
            {showTooltip && <div className="tooltip">Click on the picture</div>}
            <img
              className={`program-gif toggle-fade ${
                toggled ? "fade-out" : "fade-in"
              }`}
              src={toggled ? after : before}
              alt="toggle gif"
            />
          </div>
          <strong>
            <p className="toggle-text">{toggled ? "...after" : "before..."}</p>
          </strong>
        </div>

        <div className="program-info">
          <div className="program-text-wrapper">
            <h4 className="program-subtitle">
              <strong>{title}</strong>
            </h4>
            <p className="program-text">{p1}</p>
            <p className="program-text">{p2}</p>
            <p className="program-text">{p3}</p>

            <p>{ending}</p>
            <strong>Tanti Baci Tom&Gérry</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
