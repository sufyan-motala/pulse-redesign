"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/courses");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#FAF9F6]">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-[#E67E22] rounded-3xl flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center">
              <div className="w-16 h-1 bg-white rounded-full relative">
                <div className="absolute w-8 h-8 border-4 border-white rounded-full -right-2 -top-4"></div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="..."
              className="mt-1 bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="..."
              className="mt-1 bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
