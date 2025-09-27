import { Button } from "@/components/ui/button";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl  font-semibold text-slate-50 drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-slate-50 text-lg">Authentication Service</p>
        <div>
          <LoginButton>
            <Button
              variant="secondary"
              size="lg"
              className="text-xl cursor-pointer"
            >
              Login
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
