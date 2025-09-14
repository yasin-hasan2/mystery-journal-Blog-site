// src/app/error.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error("Error caught by error.tsx:", error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
      {/* Animated error circle */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full border-8 border-red-400 border-t-transparent animate-spin"></div>
        <span className="absolute inset-0 flex items-center justify-center text-red-600 text-5xl font-bold animate-bounce">
          !
        </span>
      </div>

      {/* Error Message */}
      <h1 className="text-3xl font-bold text-gray-800">Something went wrong</h1>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        {error.message || "An unexpected error has occurred."}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Try Again
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 rounded-md bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
