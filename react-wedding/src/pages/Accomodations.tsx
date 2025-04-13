import React from "react";
import HotelCard, { HotelCardProps } from "../components/HotelCard";
import { Hotel } from "../types/types";
import { useLanguage } from "../context/LanguageContext";

type Translations = {
  title: string;
  description: string;
  extra: string;
  questions: string;
};

export type TranslationLang = "en" | "it" | "de";

const labelTranslations: Record<TranslationLang, HotelCardProps["labels"]> = {
  en: {
    address: "Address",
    website: "Website",
    distance1: "Distance to Graubners",
    distance2: "Distance to Standesamt",
  },
  it: {
    address: "Indirizzo",
    website: "Sito web",
    distance1: "Distanza da casa di Geri",
    distance2: "Distanza dal Comune",
  },
  de: {
    address: "Adresse",
    website: "Website",
    distance1: "Distance to Graubners",
    distance2: "Distance to Standesamt",
  },
};

const Accomodations: React.FC = () => {
  const { language } = useLanguage();

  const hotelData: Hotel[] = [
    {
      name: "Motel One Ulm",
      address: "Münsterplatz 7, 89073 Ulm",
      website: "https://www.motel-one.com/de/hotels/ulm/hotel-ulm",
      distance1: "2km ",
      distance2: "400m ",

      image:
        "https://image.motel-one.com/fileadmin/dam/_processed_/8/e/csm_Ulm_Bar_6_e9f4113b48.jpg?w=1844&h=1536&format=webp&quality=80&fit=cover",
    },
    {
      name: "Me and All Hotel Ulm",
      address: "Bahnhofplatz 7, 89073 Ulm",
      website:
        "https://www.hyatt.com/me-and-all-hotels/en-US/strju-me-and-all-hotel-ulm",
      distance1: "2,5km",
      distance2: "750m ",

      image:
        "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/03/30/1525/STRJU-P0007-Exterior.jpg/STRJU-P0007-Exterior.16x9.jpg?imwidth=2560",
    },
    {
      name: "Leonardo Royal Hotel Ulm",
      address: "Mörikestraße 17, 89077 Ulm",
      website: "https://www.leonardo-hotels.de/ulm",
      distance1: "2,6km",
      distance2: "1,6km ",

      image:
        "https://static.leonardo-hotels.com/image/MURC_LRHU_01_JUN17_4000x2600_95fd78022a7c85bd52a2d5ad475a4730_2048x1331_desktop_2.jpg",
    },
  ];

  const translations: Record<TranslationLang, Translations> = {
    en: {
      title: "Hotels in Ulm",
      description:
        "If you’re planning to book a hotel in Ulm, we recommend checking out the options listed below. We’ve pre-reserved a block of 20 rooms at each hotel. If you’re interested, you can book your room using the code Gerry&Tom. Please also let the hotel know whether you’d like to include breakfast with your stay. The rooms are reserved for two nights, from August 29 to August 31, 2025.",
      extra:
        "If you prefer not to stay in a hotel, feel free to check out Airbnb — there are some good apartments available at reasonable prices.",
      questions: "If you have any questions, let us know!",
    },
    it: {
      title: "Hotel a Ulm",
      description:
        "Se stai pensando di prenotare un hotel a Ulm, ti consigliamo di dare un’occhiata alle opzioni elencate qui sotto. Abbiamo pre-prenotato un blocco di 20 camere in ciascun hotel. Se sei interessato, puoi prenotare la tua stanza utilizzando il codice Gerry&Tom. Ti preghiamo inoltre di comunicare all’hotel se desideri includere la colazione nel tuo soggiorno. Le camere sono riservate per due notti, dal 29 al 31 agosto 2025.",
      extra:
        "Se preferisci non alloggiare in hotel, dai un’occhiata ad Airbnb — ci sono ottimi appartamenti a prezzi ragionevoli.",
      questions: "Se hai domande, scrivici pure!",
    },
    de: {
      title: "Hotels in Ulm",
      description:
        "Wenn du planst, ein Hotel in Ulm zu buchen, empfehlen wir dir, einen Blick auf die unten aufgeführten Optionen zu werfen. Wir haben in jedem Hotel ein Kontingent von 20 Zimmern vorreserviert. Wenn du interessiert bist, kannst du dein Zimmer mit dem Code Gerry&Tom buchen. Bitte gib dem Hotel auch Bescheid, ob du mit oder ohne Frühstück buchen möchtest. Die Zimmer sind für zwei Nächte reserviert – vom 29. bis 31. August 2025.",
      extra:
        "Wenn du lieber nicht in einem Hotel übernachten möchtest, schau doch mal bei Airbnb vorbei – dort findest du gute Apartments zu vernünftigen Preisen..",
      questions: "Wenn du Fragen hast, melde dich einfach bei uns!",
    },
  };

  const currentLang =
    translations[language as TranslationLang] || translations.en;

  return (
    <div
      className="hotel-info-page"
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <h1>{currentLang.title}</h1>
      <p>{currentLang.description}</p>
      <p>{currentLang.extra}</p>
      <p>{currentLang.questions}</p>

      <div className="hotel-card-container">
        {hotelData.map((hotel, index) => (
          <HotelCard
            key={index}
            hotel={hotel}
            index={index}
            labels={labelTranslations[language as TranslationLang]}
          />
        ))}
      </div>
    </div>
  );
};

export default Accomodations;
