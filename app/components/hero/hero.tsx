'use client';

import { useEffect, useRef } from 'react';
import { renderCanvas } from './renderCanvas';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div>
      <h1 className="sr-only">
        Hello I&apos;m Jayshree Sadangi, I&apos;m a software developer, and I love building things
        for the web.
      </h1>
      <div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-5xl px-4 sm:px-9 xl:max-w-6xl xl:px-0">
          <div ref={ref} className="flex cursor-default flex-col space-y-2 -mt-36">
            {/* Shiny white text effect - single line */}
            <h1
              className="crisp-text text-5xl font-bold sm:text-7xl md:text-8xl xl:text-9xl whitespace-nowrap"
              style={{
                fontFamily: "'Lobster Two', sans-serif",
              }}
            >
              Jayshree Sadangi
            </h1>

            <h2 className="text-3xl font-medium sm:text-6xl md:text-6xl xl:text-7xl text-gray-300 mt-8">
              Crafting <span className="text-white font-bold">exceptional</span> digital experiences
            </h2>

            <div>
              <a
                href="/about"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                about me &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>

      <style jsx global>{`
        .crisp-text {
          color: white;
          text-shadow:
            0 0 2px rgba(255, 255, 255, 0.2),
            0 0 4px rgba(255, 255, 255, 0.2);
          position: relative;
          letter-spacing: 0px;
          font-weight: 700;
          /* Ensure sharp rendering */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .crisp-text::before {
          content: 'Jayshree Sadangi';
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
          width: 100%;
        }

        @keyframes shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </div>
  );
}
