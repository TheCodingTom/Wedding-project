import React from "react";
import "../styles/hotel.styles.css";
import { Hotel } from "../types/types";

export interface HotelCardProps {
  hotel: Hotel;
  index: number;
  labels: {
    address: string;
    website: string;
    distance1: string;
    distance2: string;
    email: string;
    price: string;
  };
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, index, labels }) => {
  const isReversed = index === 1;

  return (
    <div className="hotel-card-container">
      <div className={`hotel-card ${index === 1 ? "reverse-on-mobile" : ""}`}>
        <div className="hotel-card-content">
          {!isReversed && (
            <div className="hotel-card-text">
              <h2>{hotel.name}</h2>
              <p>
                <strong>{labels.address}:</strong> {hotel.address}
              </p>
              <p>
                <strong>{labels.website}:</strong>{" "}
                <a
                  href={hotel.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hotel.website}
                </a>
              </p>
              <p>
                <strong>{labels.distance1}:</strong> {hotel.distance1}
              </p>
              <p>
                <strong>{labels.distance2}:</strong> {hotel.distance2}
              </p>
              <p>
                <strong>{labels.email}:</strong>{" "}
                <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
              </p>
              <p>
                <strong>{labels.price}:</strong> {hotel.price}
              </p>
            </div>
          )}

          {hotel.image && (
            <div className="hotel-card-image">
              <img src={hotel.image} alt={hotel.name} />
            </div>
          )}

          {isReversed && (
            <div className="hotel-card-text">
              <h2>{hotel.name}</h2>
              <p>
                <strong>{labels.address}:</strong> {hotel.address}
              </p>
              <p>
                <strong>{labels.website}:</strong>{" "}
                <a
                  href={hotel.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hotel.website}
                </a>
              </p>
              <p>
                <strong>{labels.distance1}:</strong> {hotel.distance1}
              </p>
              <p>
                <strong>{labels.distance2}:</strong> {hotel.distance2}
              </p>
              <p>
                <strong>{labels.email}:</strong>{" "}
                <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
              </p>
              <p>
                <strong>{labels.price}:</strong> {hotel.price}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
