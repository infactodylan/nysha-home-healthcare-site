"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const body = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      careFor: String(data.get("careFor") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setMessage(
          json.error ??
            "Something went wrong. Please call us or try again shortly.",
        );
        return;
      }

      setStatus("success");
      setMessage("Thank you—we received your message and will reply soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card border border-base-300 bg-base-100 shadow-xl"
      noValidate
    >
      <div className="card-body gap-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="form-control w-full">
            <span className="label-text mb-1 font-medium">Full name</span>
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              className="input input-bordered w-full"
              placeholder="Your name"
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text mb-1 font-medium">Email</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="input input-bordered w-full"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="form-control w-full">
            <span className="label-text mb-1 font-medium">Phone (optional)</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              className="input input-bordered w-full"
              placeholder="(260) 555-0100"
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text mb-1 font-medium">Care is for</span>
            <select
              name="careFor"
              className="select select-bordered w-full"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="self">Myself</option>
              <option value="parent">A parent</option>
              <option value="spouse">A spouse or partner</option>
              <option value="other-family">Another family member</option>
              <option value="professional">Professional / case manager</option>
            </select>
          </label>
        </div>
        <label className="form-control w-full">
          <span className="label-text mb-1 font-medium">
            How can we help?
          </span>
          <textarea
            name="message"
            required
            rows={5}
            className="textarea textarea-bordered w-full text-base"
            placeholder="Tell us about daily tasks, scheduling needs, or questions about private pay and assessments."
          />
        </label>

        {message ? (
          <div
            role="status"
            className={
              status === "success"
                ? "alert alert-success text-sm"
                : "alert alert-error text-sm"
            }
          >
            {message}
          </div>
        ) : null}

        <div className="card-actions justify-end">
          <button
            type="submit"
            className="btn btn-primary min-w-[10rem]"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <span className="loading loading-spinner loading-sm" />
            ) : null}
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>
        </div>
      </div>
    </form>
  );
}
