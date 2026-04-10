import { data } from "react-router";
import { Resend } from "resend";

export interface ContactResponse {
  success: boolean;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
    form?: string;
  };
}

function errorResponse(message: string) {
  return data(
    { success: false, errors: { form: message } } satisfies ContactResponse,
    { status: 500 },
  );
}

export async function action({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const honeypot = String(formData.get("company") ?? "").trim();

    // Silent bot rejection
    if (honeypot) {
      return { success: true } satisfies ContactResponse;
    }

    // Validation
    const errors: ContactResponse["errors"] = {};
    if (!name) errors.name = "Name is required.";
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^.+@.+\..+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!message) {
      errors.message = "Message is required.";
    } else if (message.length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return data({ success: false, errors } satisfies ContactResponse, {
        status: 400,
      });
    }

    // Check for API key before attempting to send
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return errorResponse("Contact form is not configured yet. Please try again later.");
    }

    // Send email
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Claude Code ABQ <onboarding@resend.dev>",
      to: "marty@customcult.com",
      replyTo: email,
      subject: `[Claude Code ABQ] Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return errorResponse(`Resend error: ${error.message}`);
    }

    return { success: true } satisfies ContactResponse;
  } catch (err) {
    console.error("Contact form error:", err);
    const message = err instanceof Error ? err.message : String(err);
    return errorResponse(`Unexpected error: ${message}`);
  }
}
