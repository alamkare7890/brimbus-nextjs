"use client";

import { FormEvent, useState } from "react";

const API_URL =
  "https://api.brimbus.com/wp-json/custom/v1/contact";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSuccess(true);
      setMessage(result.message || "Message sent successfully.");

      form.reset();
    } catch (error: any) {
      setSuccess(false);
      setMessage(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="form_group">
          <label htmlFor="your-name">Your Name</label>

          <input
            id="your-name"
            name="your-name"
            type="text"
            required
            placeholder="Full Name"
            className="form_field"
          />
        </div>

        <div className="form_group">
          <label htmlFor="your-email">Your Email</label>

          <input
            id="your-email"
            name="your-email"
            type="email"
            required
            placeholder="Email Address"
            className="form_field"
          />
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="form_group">
          <label htmlFor="brand-name">
            Brand Name
          </label>

          <input
            id="brand-name"
            name="brand-name"
            type="text"
            placeholder="Business Name"
            className="form_field"
          />
        </div>

        <div className="form_group">
          <label htmlFor="website">
            Website / Instagram
          </label>

          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://example.com"
            className="form_field"
          />
        </div>

      </div>

      <div className="form_group">

        <label htmlFor="business-stage">
          Business Stage
        </label>

        <select
          id="business-stage"
          name="business-stage"
          className="form_field"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>

          <option value="Pre-launch concept">
            Pre-launch concept
          </option>

          <option value="Early stage (under 1 yr)">
            Early stage (under 1 yr)
          </option>

          <option value="Operating & growing">
            Operating & growing
          </option>

          <option value="Established · scaling">
            Established · scaling
          </option>

        </select>

      </div>

      <div className="form_group">

        <label htmlFor="business-goals">
          Business Goals
        </label>

        <textarea
          id="business-goals"
          name="business-goals"
          rows={6}
          placeholder="What does brand success look like for you in the next 12 months?"
          className="form_field"
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="theme_button bg-[#111111] text-white px-6 py-3 disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {message && (
        <p
          className={`text-sm ${
            success
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

    </form>
  );
}