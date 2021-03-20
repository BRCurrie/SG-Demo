import { Address, Company, Geolocation } from "../../shared/models";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone?: string;
  website?: string;
  company?: Company;
}
