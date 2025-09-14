// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';

// const Hero = () => {
//   const [open, setOpen] = useState(false);              // contact modal
//   const [loading, setLoading] = useState(false);        // full-screen loader
//   const [resultOpen, setResultOpen] = useState(false);  // result popup
//   const [resultMsg, setResultMsg] = useState('');       // message text
//   const [resultOk, setResultOk] = useState<boolean>(true); // success/error flag

//   const dialogRef = useRef<HTMLDivElement | null>(null);
//   const firstFieldRef = useRef<HTMLInputElement | null>(null);

//   // Close contact modal on ESC
//   useEffect(() => {
//     function onKeyDown(e: KeyboardEvent) {
//       if (e.key === 'Escape') {
//         if (resultOpen) setResultOpen(false);
//         else setOpen(false);
//       }
//     }
//     document.addEventListener('keydown', onKeyDown);
//     return () => document.removeEventListener('keydown', onKeyDown);
//   }, [resultOpen]);

//   // Focus first field when contact modal opens
//   useEffect(() => {
//     if (open) setTimeout(() => firstFieldRef.current?.focus(), 0);
//   }, [open]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // 🔧 capture form element BEFORE any await (fixes .reset() error)
//     const formEl = e.currentTarget as HTMLFormElement;

//     setLoading(true);
//     setResultOpen(false);

//     const form = new FormData(formEl);
//     const payload = Object.fromEntries(form.entries());

//     try {
//       const res = await fetch('/api/tit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();

//       if (!res.ok) throw new Error(data?.error || 'Request failed');

//       // success
//       formEl.reset();
//       setOpen(false); // close contact modal on success
//       setResultOk(true);
//       setResultMsg(data?.message ?? 'Thanks! Your message has been sent.');
//     } catch (error: any) {
//       setResultOk(false);
//       setResultMsg(error?.message || 'Something went wrong. Please try again.');
//       // keep contact modal open so the user can adjust fields
//     } finally {
//       setLoading(false);   // hide loader
//       setResultOpen(true); // show result popup
//     }
//   };

//   return (
//     <div className="relative w-full min-h-screen flex justify-center flex-col">
//       <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
//         {/* Text Content */}
//         <div data-aos="fade-right">
//           <h1 className="text-2xl sm:text-6xl font-bold">We Solve Your Digital Problems</h1>
//           <p className="mt-4 text-sm sm:text-lg font-medium">Let&apos;s connect — your solution starts here.</p>

//           <div className="mt-6 flex flex-wrap items-center gap-4">
//             <button
//               onClick={() => setOpen(true)}
//               className="px-10 py-3.5 sm:block cursor-pointer rounded-lg bg-cyan-700 hover:bg-cyan-900 transition-all duration-300 text-white"
//             >
//               Connect with us
//             </button>
//           </div>
//         </div>

//         {/* Image */}
//         {/* <div data-aos="fade-left" data-aos-delay="150" className="mx-auto hidden xl:block">
//           <Image src="/image/home.png" alt="hero" width={900} height={700} />
//         </div> */}
//         <div className="mx-auto block" data-aos-delay="150">
//           <Image
//             src="/image/home.png"
//             alt="hero"
//             width={900}
//             height={700}
//             data-aos="fade-left"
//             className="w-full h-auto max-w-[560px] md:max-w-none "
//             sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 900px"
//           />
//         </div>
//       </div>

//       {/* Contact Modal */}
//       <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
//         {/* Backdrop */}
//         <div
//           className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
//           onClick={() => setOpen(false)}
//         />
//         {/* Panel */}
//         <div
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="contact-title"
//           ref={dialogRef}
//           className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
//                       w-[90%] max-w-lg rounded-2xl
//                       bg-white dark:bg-gray-900
//                       shadow-2xl border border-gray-200 dark:border-gray-800
//                       transition-transform ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
//         >
//           <div className="p-6 sm:p-8">
//             <div className="flex items-start justify-between gap-6">
//               <div>
//                 <h2 id="contact-title" className="text-2xl font-bold text-gray-900 dark:text-white">Connect with us</h2>
//                 <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//                   Tell us a bit about your project and we’ll get back to you.
//                 </p>
//               </div>
//               <button
//                 onClick={() => setOpen(false)}
//                 className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
//                            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 rounded-md"
//                 aria-label="Close contact form"
//               >
//                 ✕
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="mt-6 space-y-5">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-200">Name</label>
//                 <input
//                   ref={firstFieldRef}
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
//                              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
//                              px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/70"
//                   placeholder="Your full name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200">Email</label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
//                              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
//                              px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/70"
//                   placeholder="you@company.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="query" className="block text-sm font-medium text-gray-800 dark:text-gray-200">Query</label>
//                 <textarea
//                   id="query"
//                   name="query"
//                   required
//                   rows={4}
//                   className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
//                              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
//                              px-4 py-2.5 outline-none resize-y focus:ring-2 focus:ring-blue-500/70"
//                   placeholder="How can we help?"
//                 />
//               </div>

//               <div className="flex items-center justify-end gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
//                              text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800
//                              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="px-8 py-2.5 text-sm rounded-lg bg-cyan-700 hover:bg-cyan-900 text-white transition-all duration-300 disabled:opacity-60"
//                 >
//                   {loading ? 'Sending…' : 'Send message'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Full-screen loader overlay */}
//       {loading && (
//         <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm">
//           <div
//             role="status"
//             aria-live="polite"
//             className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-xl"
//           >
//             <div className="h-12 w-12 rounded-full border-4 border-gray-300 dark:border-gray-700 border-t-cyan-600 animate-spin" />
//             <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Sending your message…</p>
//             <span className="sr-only">Loading</span>
//           </div>
//         </div>
//       )}

//       {/* Result popup (after loader) */}
//       {resultOpen && (
//         <div className="fixed inset-0 z-[75] flex items-center justify-center bg-black/40">
//           <div className="w-[92%] max-w-sm rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-2xl text-center">
//             <div className={`mx-auto mb-3 h-12 w-12 rounded-full flex items-center justify-center
//                             ${resultOk ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
//                 : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}`}>
//               {resultOk ? '✓' : '✕'}
//             </div>
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//               {resultOk ? 'Message sent' : 'Something went wrong'}
//             </h3>
//             <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{resultMsg}</p>
//             <button
//               onClick={() => setResultOpen(false)}
//               className="mt-5 px-5 py-2.5 rounded-lg bg-cyan-700 hover:bg-cyan-900 text-white transition-colors"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;



'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type ApiResponse = { message?: string; error?: string };
type JsonPayload = Record<string, string>;

const Hero: React.FC = () => {
  // contact modal
  const [open, setOpen] = useState(false);
  // full-screen loader
  const [loading, setLoading] = useState(false);
  // result popup
  const [resultOpen, setResultOpen] = useState(false);
  const [resultMsg, setResultMsg] = useState('');
  const [resultOk, setResultOk] = useState<boolean>(true);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  // Close modals on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (resultOpen) setResultOpen(false);
        else setOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [resultOpen]);

  // Focus first field when contact modal opens
  useEffect(() => {
    if (open) setTimeout(() => firstFieldRef.current?.focus(), 0);
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.currentTarget as HTMLFormElement;
    setLoading(true);
    setResultOpen(false);

    try {
      const form = new FormData(formEl);
      const payload = Object.fromEntries(form.entries()) as JsonPayload;

      const res = await fetch('/api/tit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as ApiResponse;
      if (!res.ok) throw new Error(data?.error || 'Request failed');

      formEl.reset();
      setOpen(false);
      setResultOk(true);
      setResultMsg(data?.message ?? 'Thanks! Your message has been sent.');
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : typeof err === 'string'
            ? err
            : 'Something went wrong. Please try again.';
      setResultOk(false);
      setResultMsg(msg);
    } finally {
      setLoading(false);
      setResultOpen(true);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div data-aos="fade-right">
          <h1 className="text-2xl sm:text-6xl font-bold">We Solve Your Digital Problems</h1>
          <p className="mt-4 text-sm sm:text-lg font-medium">Let&apos;s connect — your solution starts here.</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="px-10 py-3.5 rounded-lg bg-cyan-700 hover:bg-cyan-900 transition-all duration-300 text-white"
              aria-label="Open contact form"
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Contact us</span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mx-auto" data-aos="fade-left" data-aos-delay="150">
          <Image
            src="/image/home.png"
            alt="hero"
            width={900}
            height={700}
            className="w-full h-auto max-w-[560px] md:max-w-none"
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 900px"
          />
        </div>
      </div>

      {/* Contact Modal */}
      <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          ref={dialogRef}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[90%] max-w-lg rounded-2xl
                      bg-white dark:bg-gray-900
                      shadow-2xl border border-gray-200 dark:border-gray-800
                      transition-transform ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 id="contact-title" className="text-2xl font-bold text-gray-900 dark:text-white">
                  Contact us
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Tell us a bit about your project and we’ll get back to you.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 rounded-md"
                aria-label="Close contact form"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Name
                </label>
                <input
                  ref={firstFieldRef}
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
                             bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                             px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/70"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
                             bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                             px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/70"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="query" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Query
                </label>
                <textarea
                  id="query"
                  name="query"
                  required
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
                             bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                             px-4 py-2.5 outline-none resize-y focus:ring-2 focus:ring-blue-500/70"
                  placeholder="How can we help?"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                             text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-2.5 text-sm rounded-lg bg-cyan-700 hover:bg-cyan-900 text-white transition-all duration-300 disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Send message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Full-screen loader overlay */}
      {loading && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-xl"
          >
            <div className="h-12 w-12 rounded-full border-4 border-gray-300 dark:border-gray-700 border-t-cyan-600 animate-spin" />
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Sending your message…</p>
            <span className="sr-only">Loading</span>
          </div>
        </div>
      )}

      {/* Result popup */}
      {resultOpen && (
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-black/40">
          <div className="w-[92%] max-w-sm rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-2xl text-center">
            <div
              className={`mx-auto mb-3 h-12 w-12 rounded-full flex items-center justify-center ${resultOk
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                }`}
            >
              {resultOk ? '✓' : '✕'}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {resultOk ? 'Message sent' : 'Something went wrong'}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{resultMsg}</p>
            <button
              onClick={() => setResultOpen(false)}
              className="mt-5 px-5 py-2.5 rounded-lg bg-cyan-700 hover:bg-cyan-900 text-white transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
