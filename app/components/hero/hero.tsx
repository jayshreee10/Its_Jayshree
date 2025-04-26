'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { ScrollContext } from '../providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';

export default function Hero() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);
  const words = ['Read', 'more', 'about', 'me', '→'];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, scale: 1.3 },
    visible: { opacity: 1, scale: 1, transition: { ease: 'easeOut', duration: 0.5 } },
  };
  return (
    <div>
      <h1 className="sr-only">
        Hello I&apos;m Jayshree Sadangi, I&apos;m a software developer, and I love building things
        for the web.
      </h1>
      <div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div ref={ref} className="flex cursor-default flex-col space-y-2 -mt-36">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl font-medium sm:text-6xl md:text-6xl xl:text-7xl text-gray-300"
            >
              <p
                className="text-5xl font-bold sm:text-7xl md:text-8xl xl:text-9xl text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1732535725600-f805d8b33c9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'repeat',
                  backgroundPosition: '0% 50%',
                  WebkitBackgroundClip: 'text',
                  animation: 'shimmer 5s linear infinite', // Add shimmer animation here
                }}
              >
                Jayshree Sadangi
              </p>

              <style jsx>{`
                @keyframes shimmer {
                  0% {
                    background-position: 0% 50%;
                  }
                  100% {
                    background-position: 100% 50%;
                  }
                }
              `}</style>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl font-medium sm:text-6xl md:text-6xl xl:text-7xl text-gray-300"
            >
              Crafting <span className="text-white font-bold">exceptional</span> digital experiences
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
            >
              <Link
                href="/about"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                More about me &rarr;
              </Link>
            </motion.div>
          </div>
          <motion.div
            animate={{
              transform: `translateY(${progress * 10}vh)`,
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8"
          >
            <div
              role="presentation"
              className="flex cursor-pointer flex-col items-center justify-center"
              onClick={() => {
                const intro = document.querySelector('#intro');

                intro?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <HiOutlineArrowNarrowDown size={20} />
            </div>
          </motion.div>
        </div>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
