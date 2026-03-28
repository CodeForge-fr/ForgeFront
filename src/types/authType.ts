
export interface UserProfile {
  id: number | null | undefined;
  name: string;
  surname: string;
  email: string;
  phone: string;
  nickname: string;
  age: number;
  gender: string;
  role: string;
}

export interface IAuth extends UserProfile {
  password: string;
}

export interface AuthContextType {
  user: UserProfile | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (data: UserProfile & { password: string }) => Promise<boolean>;
  logout: () => void;
}

export interface TokenResponse {
  user?: UserProfile | null;
}
