'use client';

import { useEffect, useRef, useState } from 'react';
import { renderCanvas } from './renderCanvas';

export default function Hero() {
  const ref = useRef(null);
  const [theme, setTheme] = useState('dark'); // Default to dark theme based on your layout.tsx config

  useEffect(() => {
    // Set up theme detection
    const detectTheme = () => {
      // Check if dark mode is active by checking the html class
      const isDarkMode = document.documentElement.classList.contains('dark');
      setTheme(isDarkMode ? 'dark' : 'light');
    };

    // Initial detection
    detectTheme();

    // Set up observer to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          detectTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Initialize canvas
    renderCanvas();

    // Cleanup
    return () => {
      observer.disconnect();
    };
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
            {/* Theme responsive name display */}
            <h1
              className={`name-text text-5xl font-bold sm:text-7xl md:text-8xl xl:text-9xl whitespace-nowrap ${
                theme === 'light' ? 'name-light' : 'name-dark'
              }`}
              style={{
                fontFamily: "'Lobster Two', sans-serif",
              }}
            >
              Jayshree Sadangi
            </h1>

            <h2
              className={`tagline-text text-3xl font-medium sm:text-6xl md:text-6xl xl:text-7xl ${
                theme === 'light' ? 'tagline-light' : 'tagline-dark'
              } mt-8`}
            >
              Crafting{' '}
              <span className={` ${theme === 'light' ? 'highlighted-light' : 'highlighted-dark'}`}>
                exceptional
              </span>{' '}
              digital experiences
            </h2>

            <div>
              <a
                href="/about"
                className={`underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl ${
                  theme === 'light' ? 'link-light' : 'link-dark'
                }`}
              >
                about me &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>

      <style jsx global>{`
        /* Theme variables */
        :root {
          --text-primary: #000000;
          --text-secondary: rgba(0, 0, 0, 0.8);
          --shine-gradient: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.8) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          --highlight-gradient: linear-gradient(90deg, #000000, #333333);
          --highlight-text-color: #ffffff;
        }

        .dark {
          --text-primary: #ffffff;
          --text-secondary: rgba(255, 255, 255, 0.8);
          --shine-gradient: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          --highlight-gradient: linear-gradient(90deg, #ffffff, #e6e6e6);
          --highlight-text-color: #000000;
        }

        /* Name text styling */
        .name-text {
          position: relative;
          letter-spacing: 0px;
          font-weight: 700;
          /* Ensure sharp rendering */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .name-light {
          color: #333333;
          text-shadow:
            0 0 2px rgba(0, 0, 0, 0.1),
            0 0 4px rgba(0, 0, 0, 0.1);
        }

        .name-dark {
          color: white;
          text-shadow:
            0 0 2px rgba(255, 255, 255, 0.2),
            0 0 4px rgba(255, 255, 255, 0.2);
        }

        .name-text::before {
          content: 'Jayshree Sadangi';
          position: absolute;
          left: 0;
          top: 0;
          background: var(--shine-gradient);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
          width: 100%;
        }

        /* Tagline styling */
        .tagline-light {
          color: #333333;
        }

        .tagline-dark {
          color: #f0f0f0;
        }

        /* Link styling */
        .link-light {
          color: #333333;
        }

        .link-dark {
          color: #f0f0f0;
        }

        /* Highlighted text styling */
        .highlighted-text {
          font-weight: 700;
          background-clip: text;
          -webkit-background-clip: text;
          background-size: 100%;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .highlighted-light {
          color: #000000;
          text-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .highlighted-dark {
          color: #ffffff;
          text-shadow: 0 0 3px rgba(255, 255, 255, 0.2);
          position: relative;
        }

        .highlighted-light::after,
        .highlighted-dark::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 3px;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.5s ease;
        }

        .highlighted-light::after {
          background: linear-gradient(90deg, #000, #333);
        }

        .highlighted-dark::after {
          background: linear-gradient(90deg, #fff, #e6e6e6);
        }

        .highlighted-text:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
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
