"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => redirect("/transactions"));

  return (
    <main className="flex justify-center items-center w-full h-screen text-center">
      <section>
        <h1 className="text-4xl font-bold text-monaOrange">
          The main content is at transactions page
        </h1>
        <Link
          href="/transactions"
          className="mt-8 text-monaOrange/70 hover:underline"
        >
          Go to transactions
        </Link>
      </section>
    </main>
  );
}
