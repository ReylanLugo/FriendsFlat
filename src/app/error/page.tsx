"use client";
import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const errorParams = useSearchParams();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-16 py-12 text-center">
      <h3 className={"text-5xl font-bold"}>Sorry, something went wrong</h3>
      <p className={"text-xl text-red-500"}>{errorParams.get("message")}</p>
    </main>
  );
}
