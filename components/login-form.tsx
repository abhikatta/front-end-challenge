"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      setLoading(false);

      if (!res.ok) {
        setError(data.message);
        return;
      } else {
        router.replace("/");
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
      console.error(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg bg-secondary p-8 shadow">
      <h1 className="mb-6 text-2xl font-bold text-center">Login</h1>

      {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

      <div className="mb-4">
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          className="w-full rounded border px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          className="w-full rounded border px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <Button
        disabled={loading}
        className="w-full rounded bg-black py-2 text-white hover:bg-gray-800 disabled:opacity-50">
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};
