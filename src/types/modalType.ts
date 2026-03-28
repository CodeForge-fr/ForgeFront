export interface modalType {
  loading: boolean;
  setLoading: (value: boolean) => void;
  activeModal: string | null;
  setActiveModal: (value: string | null) => void; 
  onClose: () => void;
}
