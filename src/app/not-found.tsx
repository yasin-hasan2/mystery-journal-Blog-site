// src/app/not-found.tsx
"use client";

import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 p-6 text-center">
      {/* Animated 404 text */}
      <h1 className="text-8xl font-extrabold text-red-500 animate-pulse mb-6">
        404
      </h1>

      {/* Message */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        Sorry, the page you are looking for does not exist. It might have been
        removed or the URL is incorrect.
      </p>

      {/* Home Button */}
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </button>

      {/* Floating animated dots */}
      <div className="absolute bottom-10 flex space-x-2 animate-bounce">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      </div>
    </div>
  );
}
