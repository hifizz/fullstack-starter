export type AuthUserDTO = {
  id: string;
  email: string;
  name?: string | null;
  image?: string | null;
  plan?: {
    id: string;
    name: string;
    status: "trial" | "active" | "past_due" | "canceled";
    trialEndsAt?: string | null;
  } | null;
};

export type AuthSessionDTO = {
  id: string;
  expiresAt: string;
};

export type AuthMeResponseDTO = {
  user: AuthUserDTO;
  session: AuthSessionDTO;
};

export type AuthErrorDTO = {
  status: number;
  message: string;
};
