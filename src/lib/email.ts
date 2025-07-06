import { Resend } from "resend";
import { env } from "~/env";

const resend = new Resend(env.RESEND_API_KEY);

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export const sendEmail = async ({
  to,
  subject,
  html,
  from = "onboarding@resend.dev",
}: SendEmailOptions) => {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email.");
    }

    return data;
  } catch (e) {
    console.error("An unexpected error occurred while sending email:", e);
    throw new Error("Failed to send email.");
  }
};
