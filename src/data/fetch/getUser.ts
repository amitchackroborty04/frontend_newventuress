"use server";

import { UserInfo } from "@/types/auth";

interface Props {
  email: string;
  password: string;
}

export const getuser = async ({ email, password }: Props) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }
  );

  const resData = await response.json();

  if (!response.ok || !resData.status) {
    throw new Error(resData.message || "Login failed");
  }

  return {
    email: resData.userData.email,
    fullName: resData.userData.fullName,
    industry: resData.userData.industry,
    profession: resData.userData.profession,
    token: resData.token,
    id: resData.userData.id,
  } as UserInfo;
};
