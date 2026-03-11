
export interface Event {
  id: number;
  name: string;
  start: string;
  end: string;
  isOnline: boolean;
  location: string;
  duration: string;
  isPayable: boolean;
  isCompleted: boolean;
  price: number;
  ageLimit: number;
  description: string;
  image?: string;      
  logo: string;        
  daysLeft?: string;
}