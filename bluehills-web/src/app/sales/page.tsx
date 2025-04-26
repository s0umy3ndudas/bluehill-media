'use client';
import { BwFooter } from '@/components/BwFooter';
import { BwNavbar } from '@/components/BwNavbar';
import React, { useEffect } from 'react';

export default function TxsPage() {
  useEffect(() => {
    const calendlyScript = document.createElement('script');
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);

    return () => {
      document.body.removeChild(calendlyScript);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <BwNavbar />

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl text-center mb-6">
           

          {/* Custom Message */}
          <p className="font-semibold text-lg text-gray-900 mb-2 uppercase tracking-wide">
           COACHES  & COURSE SELLERS:
          </p>
          {/* <p className="text-gray-700 mb-4">
            Discover How We Can Guarantee You 52+ High-Ticket Clients In The Next 52 Weeks...
          </p> */}
          {/* <p className="font-medium text-sm text-gray-600 mb-6">
            Step 1 of 2: Watch Video <br />
            Step 2 of 2: Schedule Your Discovery Call <br /> */}<p className='text-gray-800'>
            Your answers will remain completely confidential and are used to prepare a strategy for you prior to the call.
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/som_das/30min"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </main>

      <BwFooter />
    </div>
  );
}
  



