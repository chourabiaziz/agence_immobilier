export class Immobilier {
    id: number;
  title: string;
  location: string;
  propertyType: string;  // New field
  status: string;        // New field (Rent/Sale)
  description: string;   // New field
  price: number;
  rent: boolean;
  area: number;
  beds: number;
  baths: number;
  garages: string;       // Updated to string to support multiple garage details
  imageUrl: string;
  }