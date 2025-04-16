import "../styles/program.css";
import gif from "../images/giphy.gif";

function Program() {
  return (
    <div className="program-section">
      <h1 className="program-title">Garden party</h1>
      <div className="program-container">
        <div className="program-gif-wrapper">
          <img className="program-gif" src={gif} alt="barney stinson gif" />
        </div>
        <div className="program-info">
          <div className="program-text-wrapper">
            <h4 className="program-subtitle">
              <strong>La dolce (deutsche) Vita! - bei uns im Garten!</strong>
            </h4>
            <p className="program-text">
              Nach der Trauung im Ulmer Standesamt & den ersten Bubbles geht’s
              ab 13 Uhr zu uns in den Garten, den wir in ein kleines
              italienisches Paradies verwandeln werden – mit allem, was dazu
              gehört. Spritz, Pasta e Amore - cosa vuoi di più? Wir freuen uns
              auf ein ausgelassenes und fröhliches Fest, bei dem (fast) alles
              erlaubt ist: von italienischen Music-Bangers, unzähligen Spritz,
              berühmt-berüchtigten Fotobox-Fails, emotionalen Momenten, wilden
              Hüftschwüngen, bis hin zu einem bunten Sprachen-Mix aus
              Italienisch, Deutsch, Englisch oder einfach Händen & Füßen.
              Hauptsache, wir dürfen mit den Menschen feiern, die wir lieben und
              schätzen – und das seid ihr! Für die Feierwütigen unter uns: wenn
              der Garten langsam schläfrig wird, öffnen wir die Tore zum
              lauschigen Garagen-Rave mit unseren Star DJs Stefan & Zen, Mani
              pulite, Max aka Massimo, Lucas und El Loco Abreu. Wir freuen uns
              so sehr auf den Tag mit euch!
            </p>
            <p>
              <strong>Tanti Baci Tom&Gérry</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
