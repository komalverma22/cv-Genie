"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";

// Custom Button Component
const Button = ({ children, variant = "default", className = "", type = "button", onClick, ...props }: any) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4",
  };

  return (
    <button type={type} className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

const Input = ({ className = "", type = "text", ...props }: any) => (
  <input
    type={type}
    className={`flex h-10 w-full rounded-[4px] border px-3 py-2 text-sm bg-transparent placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${className}`}
    {...props}
  />
);

const Label = ({ children, htmlFor, className = "" }: any) => (
  <label htmlFor={htmlFor} className={`text-sm font-medium ${className}`}>
    {children}
  </label>
);

const Card = ({ children, className = "" }: any) => (
  <div className={`rounded-xl shadow-xl p-6 ${className}`}>{children}</div>
);

const Separator = ({ className = "" }: any) => (
  <div className={`h-[1px] bg-gray-300 w-full ${className}`} />
);

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center opacity-80 "
      style={{
        backgroundImage: "url('/contact-bg.png')",
      }}
    >
      <div className="absolute inset-0 z-10"></div>

      <Card className="relative z-10 w-full max-w-md bg-white/20 border border-white/30 backdrop-blur-xl text-black">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-3xl font-bold">Sign In</h2>
          <p className="text-black-600 text-sm">Enter your email and password</p>
        </div>

        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                className="pl-10 border-gray-600 focus:border-black-500 focus:ring-black-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-sm text-black-600 hover:underline">
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                className="pl-10 pr-10 border-gray-600 focus:border-black-500 focus:ring-black-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5"
              >
                {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
            Sign In
          </Button>
        </form>

        <Separator className="my-4" />

        <p className="text-center text-sm text-black-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-green-800 underline hover:text-green-900">
            Sign Up
          </Link>
        </p>
      </Card>
    </div>
  );
}
