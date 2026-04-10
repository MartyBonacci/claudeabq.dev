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

export async function action({
  request,
}: {
  request: Request;
}): Promise<ContactResponse | ReturnType<typeof data>> {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "").trim();

  // Silent bot rejection
  if (honeypot) {
    return { success: true };
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

  // Send email
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Claude Code ABQ <noreply@claudeabq.dev>",
    to: "marty@customcult.com",
    replyTo: email,
    subject: `[Claude Code ABQ] Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return data(
      {
        success: false,
        errors: { form: "Something went wrong. Please try again." },
      } satisfies ContactResponse,
      { status: 500 },
    );
  }

  return { success: true };
}
