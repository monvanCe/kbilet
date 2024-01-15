export type tripInstance = {
  tripID: number;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  seats: (number | string)[];
};

export type userInterface = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  idNumber: number;
  gender: string;
  birthDate: string;
};
