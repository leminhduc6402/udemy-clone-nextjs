import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen items-center justify-center">
        <SignUp />
      </div>
    </Suspense>
  );
}
