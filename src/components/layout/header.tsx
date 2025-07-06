"use client";

import Link from "next/link";
import { useSession, signOut } from "~/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "../theme-toggle";

export function Header() {
  const { data: session, isPending: isLoading } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <span>Your App</span>
      </Link>
      <div className="flex items-center gap-4">
        {isLoading ? (
          <div className="h-8 w-24 animate-pulse rounded-md bg-muted" />
        ) : session ? (
          <>
            <span>{session.user?.email}</span>
            <Button variant="outline" onClick={handleSignOut}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
