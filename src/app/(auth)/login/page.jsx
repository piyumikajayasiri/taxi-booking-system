import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CarTaxiFrontIcon as Taxi } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="bg-yellow-400 p-3 rounded-full">
              <Taxi className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your account to book your ride
          </p>
        </div>

        <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-yellow-600 hover:text-yellow-500"
              >
                Forgot password?
              </Link>
            </div>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
              Sign in
            </Button>
          </form>
          <div className="text-center text-sm">
            {"Don't have an account? "}
            <Link
              href="/register"
              className="font-medium text-yellow-600 hover:text-yellow-500"
            >
              Sign up
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          By continuing, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
