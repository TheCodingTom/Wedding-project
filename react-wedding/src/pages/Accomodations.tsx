import React from "react";
import HotelCard from "../components/HotelCard";
import { Hotel } from "../types/types";
import { useLanguage } from "../context/LanguageContext";

type Translations = {
  title: string;
  description: string;
  codeInfo: string;
  breakfastInfo: string;
  bookingPeriod: string;
};

export type TranslationLang = "en" | "it" | "de";

const Accomodations: React.FC = () => {
  const { language } = useLanguage();

  const hotelData: Hotel[] = [
    {
      name: "LAGO Hotel & Restaurant am See",
      address: "Friedrichsau 50, 89073 Ulm/Donau",
      website: "https://hotel.lago-ulm.de/de/",
      distance: "800m / 10 mins walking",
      bookedRooms: 10,
      roomPrices: {
        twoPersons: { room: 119, breakfast: 21 },
        onePerson: { room: 109, breakfast: 21 },
      },
      roomBookingDeadline: "01st August 2025",
      image:
        "https://hotel.lago-ulm.de/wp-content/uploads/2018/11/galerie_49.jpg",
    },
    {
      name: "Motel One Ulm",
      address: "Münsterplatz 7, 89073 Ulm",
      website: "https://www.motel-one.com/de/hotels/ulm/hotel-ulm",
      distance: "2km / 30 mins walking",
      bookedRooms: 20,
      roomPrices: {
        twoPersons: { room: 119, breakfast: 17.9 },
        onePerson: { room: 119, breakfast: 17.9 },
      },
      roomBookingDeadline: "01st August 2025",
      image:
        "https://image.motel-one.com/fileadmin/dam/_processed_/8/e/csm_Ulm_Bar_6_e9f4113b48.jpg?w=1844&h=1536&format=webp&quality=80&fit=cover",
    },
    {
      name: "Me and All Hotel Ulm",
      address: "Bahnhofplatz 7, 89073 Ulm",
      website:
        "https://www.hyatt.com/me-and-all-hotels/en-US/strju-me-and-all-hotel-ulm",
      distance: "2,5km / 35 mins walking",
      bookedRooms: 20,
      roomPrices: {
        twoPersons: { room: 146, breakfast: 13 },
        onePerson: { room: 126, breakfast: 13 },
      },
      roomBookingDeadline: "01st August 2025",
      image:
        "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/03/30/1525/STRJU-P0007-Exterior.jpg/STRJU-P0007-Exterior.16x9.jpg?imwidth=2560",
    },
  ];

  const translations: Record<TranslationLang, Translations> = {
    en: {
      title: "Hotels in Ulm",
      description: "We recommend staying at one of the hotels below.",
      codeInfo: 'Rooms can be retrieved through the code "Gerry&Tom".',
      breakfastInfo:
        "Please let the hotel know if you want to book with or without breakfast.",
      bookingPeriod: "Rooms are reserved from 29 to 31 August 2025.",
    },
    it: {
      title: "Hotel a Ulm",
      description:
        "Ti consigliamo di soggiornare in uno degli hotel qui sotto.",
      codeInfo: 'Le stanze possono essere prenotate con il codice "Gerry&Tom".',
      breakfastInfo:
        "Si prega di informare l'hotel se desideri la colazione inclusa o esclusa.",
      bookingPeriod: "Le stanze sono prenotate dal 29 al 31 agosto 2025.",
    },
    de: {
      title: "Hotels in Ulm",
      description:
        "Wir empfehlen Ihnen, in einem der folgenden Hotels zu übernachten.",
      codeInfo: 'Zimmer können mit dem Code "Gerry&Tom" reserviert werden.',
      breakfastInfo:
        "Bitte teilen Sie dem Hotel mit, ob Sie mit oder ohne Frühstück buchen möchten.",
      bookingPeriod: "Zimmer sind vom 29. bis 31. August 2025 reserviert.",
    },
  };

  const currentLang =
    translations[language as TranslationLang] || translations.en;

  return (
    <div className="hotel-info-page">
      <h1>{currentLang.title}</h1>
      <h4>{currentLang.description}</h4>
      <p>{currentLang.codeInfo}</p>
      <p>{currentLang.breakfastInfo}</p>
      <p>{currentLang.bookingPeriod}</p>

      <div className="hotel-card-container">
        {hotelData.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Accomodations;
