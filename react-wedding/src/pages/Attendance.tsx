import "../styles/attendance.css";
import video from "../images/smalltod.mp4";
import { Button } from "react-bootstrap";
import { TranslationLang } from "./Accomodations";
import { useLanguage } from "../context/LanguageContext";
import AIpic from "../images/tomandgerryAI.jpeg";

const attendanceTranslations: Record<
  TranslationLang,
  { h1: string; p: string; button: string; h3: string; p2: string }
> = {
  en: {
    h1: "Let us know if you're coming!",
    p: "Please give us an answer before the 20.05.2025.",
    button: "Click here",
    h3: "Can't make it? No worries!",
    p2: "Here's a sneak peek of the wedding!",
  },
  it: {
    h1: "Facci sapere se ci sarai!",
    p: "Ti preghiamo di darci una risposta entro il 20.05.2025.",
    button: "Clicca qui",
    h3: "Non puoi venire? Nessun problema!",
    p2: "Ecco un'anteprima del matrimonio",
  },
  de: {
    h1: "Lass uns wissen, ob du kommst!",
    p: "Bitte gib uns bis zum 20.05.2025 Bescheid.",
    button: "Hier klicken",
    h3: "Du kannst nicht kommen? Kein Problem!",
    p2: "Hier ist ein kleines Sneak-Peek!",
  },
};

function Attendance() {
  const { language } = useLanguage();
  const { h1, p, button, h3, p2 } =
    attendanceTranslations[language as TranslationLang] ||
    attendanceTranslations.en;

  return (
    <div
      className="attendance-container"
      style={{ background: "linear-gradient(135deg, #fff0f5, #e0f7fa)" }}
    >
      <h1>{h1}</h1>
      <p>
        <strong>{p}</strong>
      </p>
      <div className="attendance-video-container">
        <div className="attendance-video-frame">
          <video
            width="100%"
            height="100%"
            controls
            autoPlay
            muted
            playsInline
            style={{ maxWidth: "100%", borderRadius: "1rem" }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Button
        href="https://forms.gle/FQ5UfQ7SD4qJuN18A"
        target="_blank"
        rel="noopener noreferrer"
      >
        {button}
      </Button>

      <div className="attendance-preview">
        <h3>{h3}</h3>
        <p>{p2}</p>
        <img src={AIpic} alt="tomandgerryAIpicture" />
      </div>
    </div>
  );
}

export default Attendance;
