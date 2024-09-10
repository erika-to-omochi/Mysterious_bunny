'use client';

import React from 'react';
import { PiRabbitLight } from "react-icons/pi";
import { useRouter } from 'next/navigation';

const Footer = () => { // ここを修正
  const router = useRouter(); // useRouterを使ってrouterを取得

  return (
    <footer className="footer bg-[rgba(255,255,255,0.5)] text-base-content p-3 flex justify-center">
      <nav className="mx-0">
        <button
          onClick={() => router.push('/')}
          type="button"
          className="flex items-center p-2 transition-all"
        >
          <PiRabbitLight />
          <span>topページ</span>
        </button>
      </nav>
      <nav className="mx-0">
        <button
          onClick={() => router.push('/chat-with-omochi')}
          type="button"
          className="flex items-center p-2 transition-all"
        >
          <PiRabbitLight />
          <span>おもちの相談室</span>
        </button>
      </nav>
      <nav className="mx-0">
        <button
          onClick={() => router.push('/chat-with-omochi')}
          type="button"
          className="flex items-center p-2 transition-all"
        >
          <PiRabbitLight />
          <span>おもちの恋愛BOT</span>
        </button>
      </nav>
    </footer>
  );
};

export default Footer; // ここを修正