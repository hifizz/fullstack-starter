import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "~/server/db";
import { env } from "~/env";
import { sendEmail } from "./email";

const ResetPasswordTemplate = ({ url }: { url: string }) => `
  <div>
    <h1>Reset Your Password</h1>
    <p>Click the link below to reset your password.</p>
    <a href="${url}">Reset Password</a>
  </div>
`;

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: "Reset your password",
        html: ResetPasswordTemplate({ url }),
      });
    },
  },
  secret: env.BETTER_AUTH_SECRET,
  baseUrl: env.BETTER_AUTH_URL,
});
