"use client"

import { useState } from "react"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import Link from "next/link"

// Custom Button Component
const Button = ({ children, variant = "default", className = "", type = "button", onClick, ...props }: any) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4",
  }

  return (
    <button type={type} className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

// Custom Input Component
const Input = ({ className = "", type = "text", ...props }: any) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

// Custom Label Component
const Label = ({ children, htmlFor, className = "" }: any) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    >
      {children}
    </label>
  )
}

// Custom Card Components
const Card = ({ children, className = "" }: any) => {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
}

const CardHeader = ({ children, className = "" }: any) => {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
}

const CardTitle = ({ children, className = "" }: any) => {
  return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
}

const CardDescription = ({ children, className = "" }: any) => {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
}

const CardContent = ({ children, className = "" }: any) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

// Custom Separator Component
const Separator = ({ className = "" }: any) => {
  return <div className={`shrink-0 bg-border h-[1px] w-full ${className}`} />
}

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("hijuyed@gmail.com")
  const [password, setPassword] = useState("password123")

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400/30 mt-10 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-2 mt-10">
            <CardTitle className="text-2xl font-semibold">Sign in</CardTitle>
            <CardDescription className="text-gray-600">Enter your details to sign in</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              type="button"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </Button>

            <Button
              variant="outline"
              className="w-full bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              type="button"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
              Sign in with Apple
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full bg-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>

          {/* Email and Password Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-500">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                  className="pl-10 pr-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white h-12">
              Sign in
            </Button>
          </form>

          <div className="text-center text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="/signup" className="text-green-600 hover:text-green-500 font-medium">
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
