import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <header className="flex justify-end p-4">
      <SignedOut>
        <SignInButton>
          <Button variant="outline">Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <Button variant="outline">Profile</Button>
        </UserButton>
      </SignedIn>
    </header>
  );
}
