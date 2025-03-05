import HotelCard from "../components/HotelCard";
import { Hotel } from "../types/types";


function Accomodations() {

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
      image: "https://hotel.lago-ulm.de/wp-content/uploads/2018/11/galerie_49.jpg",
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
      image: "https://image.motel-one.com/fileadmin/dam/_processed_/8/e/csm_Ulm_Bar_6_e9f4113b48.jpg?w=1844&h=1536&format=webp&quality=80&fit=cover", // Example image URL
    },
    {
      name: "Me and All Hotel Ulm",
      address: "Bahnhofplatz 7, 89073 Ulm",
      website: "https://www.hyatt.com/me-and-all-hotels/en-US/strju-me-and-all-hotel-ulm",
      distance: "2,5km / 35 mins walking",
      bookedRooms: 20,
      roomPrices: {
        twoPersons: { room: 146, breakfast: 13 },
        onePerson: { room: 126, breakfast: 13 },
      },
      roomBookingDeadline: "01st August 2025",
      image: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/03/30/1525/STRJU-P0007-Exterior.jpg/STRJU-P0007-Exterior.16x9.jpg?imwidth=2560", // Example image URL
    },
  ];

  
  return (
    <div className="hotel-info-page">
      <h1>Hotels in Ulm</h1>
      <h4>Some more info here like: we recommend you to stay at one of these hotels</h4>
      <p>Rooms can be retrieved through the code "Gerry&Tom"</p>
      <p>Please let the hotel know if you want to book including or excluding breakfast.</p>
      <p>Rooms booked from 29 to 31 August 2025</p>
      {hotelData.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </div>
  );
}

export default Accomodations