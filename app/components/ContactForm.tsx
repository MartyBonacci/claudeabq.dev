import { useFetcher } from "react-router";
import { Send } from "lucide-react";
import type { ContactResponse } from "~/routes/api.contact";

export function ContactForm() {
  const fetcher = useFetcher<ContactResponse>();
  const isSubmitting = fetcher.state === "submitting";
  const isSuccess = fetcher.data?.success === true;
  const errors = fetcher.data && !fetcher.data.success ? fetcher.data.errors : undefined;

  return (
    <section id="contact" className="bg-offwhite px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl font-bold text-dark md:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-dark/60">
          Have a question, want to present, or just want to say hi? Drop us a
          line.
        </p>

        {isSuccess ? (
          <div className="mt-8 rounded-xl border border-light-gray bg-light p-8 text-center">
            <p className="text-lg font-medium text-dark">Message sent!</p>
            <p className="mt-2 text-dark/60">
              Thanks for reaching out. Marty will get back to you soon.
            </p>
          </div>
        ) : (
          <fetcher.Form
            method="post"
            action="/api/contact"
            className="mt-8 space-y-6"
          >
            {errors?.form && (
              <div
                className="rounded-lg border border-red-200 bg-red-50 p-4"
                role="alert"
              >
                <p className="text-sm text-red-700">{errors.form}</p>
              </div>
            )}

            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-dark"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                aria-describedby={errors?.name ? "name-error" : undefined}
                aria-invalid={errors?.name ? true : undefined}
                className="mt-1 block w-full rounded-lg border border-light-gray bg-light px-4 py-3 text-dark placeholder:text-mid-gray focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="Your name"
              />
              {errors?.name && (
                <p
                  id="name-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-dark"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                autoComplete="email"
                aria-describedby={errors?.email ? "email-error" : undefined}
                aria-invalid={errors?.email ? true : undefined}
                className="mt-1 block w-full rounded-lg border border-light-gray bg-light px-4 py-3 text-dark placeholder:text-mid-gray focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="you@example.com"
              />
              {errors?.email && (
                <p
                  id="email-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-dark"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                aria-describedby={
                  errors?.message ? "message-error" : undefined
                }
                aria-invalid={errors?.message ? true : undefined}
                className="mt-1 block w-full resize-y rounded-lg border border-light-gray bg-light px-4 py-3 text-dark placeholder:text-mid-gray focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="What's on your mind?"
              />
              {errors?.message && (
                <p
                  id="message-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Honeypot — hidden from humans, visible to bots */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input
                type="text"
                id="contact-company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-lg bg-orange px-6 py-3 font-semibold text-light transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>
          </fetcher.Form>
        )}
      </div>
    </section>
  );
}
