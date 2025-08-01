"use client";

import { UserCircle, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Button = ({ children, variant = "default", className = "", type = "button", onClick, ...props }) => {
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

const Input = ({ className = "", type = "text", ...props }) => (
  <input
    type={type}
    className={`flex h-10 w-full rounded-[4px] border px-3 py-2 text-sm bg-transparent placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${className}`}
    {...props}
  />
);

const Label = ({ children, htmlFor, className = "" }) => (
  <label htmlFor={htmlFor} className={`text-sm font-medium ${className}`}>
    {children}
  </label>
);

const Checkbox = ({ id, ...props }) => (
  <input
    type="checkbox"
    id={id}
    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
    {...props}
  />
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl shadow-xl p-6 ${className}`}>{children}</div>
);

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center opacity-80"
      style={{ backgroundImage: "url('/contact-bg.png')" }}
    >
      <div className="absolute inset-0 z-10"></div>
      <Card className="relative z-10 w-full max-w-md bg-white/20 border border-white/30 backdrop-blur-xl text-black mt-23">
        <div className="text-center space-y-2 mb-6 ">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <UserCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold">Create your account</h2>
          <p className="text-black-600 text-sm">Enter your details to sign up</p>
        </div>

        <form className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" type="text" placeholder="Javed Ahmed" className="border-gray-600" />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input id="email" type="email" placeholder="you@example.com" className="pl-10 border-gray-600" />
            </div>
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10 border-gray-600"
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

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <Link href="/terms" className="text-green-600 hover:underline">Terms of Use</Link> and <Link href="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link>
            </label>
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-600 text-white">
            Sign Up
          </Button>
        </form>

        <p className="text-center text-sm text-black-600 mt-4">
          Already have an account?{' '}
          <Link href="/signin" className="text-green-800 underline hover:text-green-900">
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
}
