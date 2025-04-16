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
  distance1: string;
  distance2: string;
  price: string;
  email: string;

  image?: string;
};
