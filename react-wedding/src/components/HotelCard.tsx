import React from "react";
import "../styles/hotel.styles.css"; // Import the CSS file
import { Hotel } from "../types/types"; // Import the type from the types.ts file

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-card-content">
        <div className="hotel-card-text">
          <h2>{hotel.name}</h2>
          <p>
            <strong>Address:</strong> {hotel.address}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href={hotel.website} target="_blank" rel="noopener noreferrer">
              {hotel.website}
            </a>
          </p>
          <p>
            <strong>Distance to Graubners:</strong> {hotel.distance}
          </p>
          <p>
            <strong>Booked rooms:</strong> {hotel.bookedRooms} double rooms
          </p>
          <div className="room-prices">
            <p>
              <strong>For 2 persons:</strong> {hotel.roomPrices.twoPersons.room} € +{" "}
              {hotel.roomPrices.twoPersons.breakfast} € breakfast
            </p>
            <p>
              <strong>For 1 person:</strong> {hotel.roomPrices.onePerson.room} € +{" "}
              {hotel.roomPrices.onePerson.breakfast} € breakfast
            </p>
          </div>
          <p>
            <strong>Rooms can be retrieved until:</strong> {hotel.roomBookingDeadline}
          </p>
        </div>
        {/* Add hotel image here */}
        {hotel.image && (
          <div className="hotel-card-image">
            <img src={hotel.image} alt={hotel.name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelCard;