"use client";

import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-2xl shadow-2xl border border-neutral-800">
        <h1 className="text-2xl font-semibold mb-6 text-neutral-200">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2 text-neutral-400"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full bg-neutral-800 border border-neutral-700 px-3 py-2 rounded-lg text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm mb-2 text-neutral-400"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full bg-neutral-800 border border-neutral-700 px-3 py-2 rounded-lg text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-200 text-neutral-900 py-2 rounded-lg font-medium hover:bg-white transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
