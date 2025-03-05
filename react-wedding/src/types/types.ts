export type RoomPrices = {
    twoPersons: {
      room: number;
      breakfast: number;
    };
    onePerson: {
      room: number;
      breakfast: number;
    };
  };
  
  export type Hotel = {
    name: string;
    address: string;
    website: string;
    distance: string;
    bookedRooms: number;
    roomPrices: RoomPrices;
    roomBookingDeadline: string;
    image?: string; // Optional if you want to have an image for each hotel
  };