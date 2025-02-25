export type User = {
  id: string;
  email: string;
  fullName: string;
  industry: string;
  profession: string[];
};

export type SessionUser = User & {
  token: string;
};

export type LoginResponse = {
  status: boolean;
  message: string;
  token: string;
  userData: User;
};
