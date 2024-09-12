'use client';

import React from 'react';
import { PiRabbitLight } from "react-icons/pi";
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="footer text-base-content p-3 flex justify-center">
      <nav className="mx-2">
        <button
          onClick={() => router.push('/advice_room')}
          type="button"
          className="flex items-center p-2 bg-[#cb8e7e] text-white font-bold rounded-lg shadow-lg hover:bg-[#b77a6b] hover:scale-105 transition-all duration-300 sm:p-3 sm:text-lg md:p-4 md:text-xl"
        >
          <PiRabbitLight className="mr-2" />
          <span>HOME</span>
        </button>
      </nav>
      <nav className="mx-2">
        <button
          onClick={() => router.push('/chat-with-omochi')}
          type="button"
          className="flex items-center p-2 bg-[#cb8e7e] text-white font-bold rounded-lg shadow-lg hover:bg-[#b77a6b] hover:scale-105 transition-all duration-300 sm:p-3 sm:text-lg md:p-4 md:text-xl"
        >
          <PiRabbitLight className="mr-2" />
          <span>CHAT</span>
        </button>
      </nav>
      <nav className="mx-2">
        <button
          onClick={() => router.push('/omochi_bot')}
          type="button"
          className="flex items-center p-2 bg-[#cb8e7e] text-white font-bold rounded-lg shadow-lg hover:bg-[#b77a6b] hover:scale-105 transition-all duration-300 sm:p-3 sm:text-lg md:p-4 md:text-xl"
        >
          <PiRabbitLight className="mr-2" />
          <span>BOT</span>
        </button>
      </nav>
    </footer>
  );
};

export default Footer;
