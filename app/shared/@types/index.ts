export interface IUserData {
  id: string;
  name: string;
  email: string;
}

export interface IAuthContextData {
  user: IUserData | null;
  token: string | null;
  setUser: (user: IUserData | null) => void;
  setToken: (token: string | null) => void;
}

export interface IChildrenProps {
  children: React.ReactNode;
}
