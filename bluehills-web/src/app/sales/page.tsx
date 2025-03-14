'use client'
/* eslint-disable @next/next/no-sync-scripts */
import { BwFooter } from '@/components/BwFooter';
import { BwNavbar } from '@/components/BwNavbar';
import React, { useEffect, useState } from 'react';

export default function TxsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    script.onload = () => setIsLoading(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <BwNavbar />

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-2xl text-gray-800 font-semibold text-center mb-4">
            Thank you for your interest!
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Please fill out the form below, and our team will reach out to you.
          </p>

          {/* Show Loader Until Typeform Loads */}
          {isLoading && (
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Typeform Embed */}
          <div className={`w-full ${isLoading ? 'hidden' : ''}`}>
            <div data-tf-live="01JPB062ECQ1GAH7AQF61AA12S"></div>
          </div>
        </div>
      </main>

      <BwFooter />
    </div>
  );
}
