interface IUserData {
  id?: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  sex?: string;
  address: string;
  phone: string;
  birthdate?: string;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IEventProps {
  target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
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

interface IInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

interface ISelectProps {
  id: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  options: { value: string; label: string }[];
}

export type {
  IUserData,
  ISelectProps,
  IInputProps,
  ILoginData,
  IEventProps,
  IAuthContextData,
  IChildrenProps,
};
