interface IUserData {
  id?: string;
  name: string;
  email: string;
  password: string;
  image?: string;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IEventProps {
  target: HTMLInputElement | HTMLTextAreaElement;
}

interface IAuthContextData {
  user: IUserData | null;
  token: string | null;
  setUser: (user: IUserData | null) => void;
  setToken: (token: string | null) => void;
}

interface IChildrenProps {
  children: React.ReactNode;
}

export type {
  IUserData,
  ILoginData,
  IEventProps,
  IAuthContextData,
  IChildrenProps,
};
