'use client';

import Image from 'next/image';
import { siteConfig } from '@/src/configs/config'; // Import siteConfig
import AnimationContainer from '../utils/AnimationContainer';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      {/* Content Section */}
      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
          <span className="font-mono text-teal-500 dark:text-teal-300">Hello! </span>
          <span className="font-mono text-pink-500 dark:text-pink-300">I am</span>
        </p>
        <h1 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 mx-auto lg:mx-0 text-gray-900 dark:text-white">
          Karim El-Ayoubi
        </h1>
        <h2 className="text-lg lg:text-xl text-gray-700 dark:text-gray-400 mb-4 mx-auto lg:mx-0">
          <span className="relative w-[max-content] font-mono typing-animation text-gray-800 dark:text-gray-200">
            I'm a DevOps Engineer
          </span>
        </h2>
        <div className="flex gap-4 mt-2 mb-8 mx-auto lg:mx-0">
          <Link
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener"
            className="px-4 py-2 sm:px-6 sm:py-3 text-blue-500 font-bold rounded-lg border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 backdrop-blur-sm bg-white/20 dark:bg-gray-800/30 dark:border-blue-300 dark:text-blue-300 dark:hover:bg-blue-600 dark:hover:text-white"
          >
            LinkedIn
          </Link>
          <Link
            href={siteConfig.social.xing.username}
            target="_blank"
            rel="noopener"
            className="px-4 py-2 sm:px-6 sm:py-3 text-green-500 font-bold rounded-lg border border-green-500 hover:bg-green-500 hover:text-white transition duration-300 backdrop-blur-sm bg-white/20 dark:bg-gray-800/30 dark:border-green-300 dark:text-green-300 dark:hover:bg-green-600 dark:hover:text-white"
          >
            Xing
          </Link>
        </div>
    </AnimationContainer>
    {/* Bildbereich entfernt, Rest bleibt erhalten */}
    </div>
  );
};

export default Hero;
