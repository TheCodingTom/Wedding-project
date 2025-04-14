import "../styles/attendance.css";
import video from "../images/smalltod.mp4";
import { Button } from "react-bootstrap";
import { TranslationLang } from "./Accomodations";
import { useLanguage } from "../context/LanguageContext";

const attendanceTranslations: Record<
  TranslationLang,
  { h1: string; p: string; button: string }
> = {
  en: {
    h1: "Let us know if you're coming!",
    p: "Please give us an answer before the 15.05.2025.",
    button: "Click here",
  },
  it: {
    h1: "Facci sapere se ci sarai!",
    p: "Ti preghiamo di darci una risposta entro il 15.05.2025.",
    button: "Clicca qui",
  },
  de: {
    h1: "Lass uns wissen, ob du kommst!",
    p: "Bitte gib uns bis zum 15.05.2025 Bescheid.",
    button: "Hier klicken",
  },
};

function Attendance() {
  const { language } = useLanguage();
  const { h1, p, button } =
    attendanceTranslations[language as TranslationLang] ||
    attendanceTranslations.en;

  return (
    <div
      className="attendance-container"
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <h1>{h1}</h1>
      <p>{p}</p>
      <div className="attendance-video-container">
        <div className="attendance-video-frame">
          <iframe
            width="100%"
            height="100%"
            src={video}
            title="Embedded Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Button
        href="https://forms.gle/FQ5UfQ7SD4qJuN18A"
        target="_blank"
        rel="noopener noreferrer"
      >
        {button}
      </Button>
    </div>
  );
}

export default Attendance;
