export interface EventContextType {
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  activeModal: string | null;
  setActiveModal: (modal: string | null) => void;
  onClose: () => void;
  // Added Pagination & Logic
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  pageNumbers: number[];
  refreshEvents: () => Promise<void>;
}
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
  image: string;
  logo: string;
  daysLeft?: string;
}
