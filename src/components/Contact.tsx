"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="z-100 max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg dark:bg-gray-900 dark:shadow-gray-800">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">
        Contact Me
      </h2>

      {submitted && (
        <p className="mb-6 text-green-500 text-center font-semibold">
          Thanks for reaching out! I will get back to you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <label className="flex flex-col text-gray-800 dark:text-gray-300 font-medium">
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 transition"
          />
        </label>

        <label className="flex flex-col text-gray-800 dark:text-gray-300 font-medium">
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 transition"
          />
        </label>

        <label className="flex flex-col text-gray-800 dark:text-gray-300 font-medium">
          Message:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Write your message here..."
            className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 resize-none transition"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
