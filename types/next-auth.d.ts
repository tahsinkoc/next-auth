// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        accessToken?: string;
        user: {
            id?: string;
            email?: string;
            name?: string | null;
            image?: string | null;
        };
    }

    interface User {
        id?: string;
        email?: string;
    }

    interface JWT {
        accessToken?: string;
        id?: string;
        email?: string;
    }
}
