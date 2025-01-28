import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UserInfo } from "./types/auth";

export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        if (!credentials) return null;

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );

        console.log("RES:", response);

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
      },
    }),
  ],
} satisfies NextAuthConfig;
