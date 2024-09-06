"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [advice, setAdvice] = useState('');

  const handleClick = () => {
    const adviceList = [
      "おもちの歯は一生伸び続けるよ",
      "おもちはお鼻でツンツンするよ",
      "おもち、胃は弱いよ",
      "怒った時は足ダンするよ",
      "おもち、視野はほぼ360度あるよ",
      "うさぎは最大３ｍくらい飛ぶぞ",
      "おもちの歯は２８本あるよ",
      "おもちはリーダー気質だよ",
      "おもちの耳は体温調整もしてるよ",
      "おもちの繁殖能力はすごく高いよ",
      "おもちの好物はりんごだよ",
      "おもちの特技は気配を消すことだよ",
      "将来の夢はアナウンサーだよ",
      "おもち将来は野球選手と結婚したいな〜",
      "趣味はYogiboホリホリだよ"
    ];
    const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
    setAdvice(randomAdvice);
  };

  return (
    <div className="container flex flex-col items-center min-h-screen px-4 py-8">
      <div className="text-overlay text-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold mt-10">Hello、おもちです</h1>
        <h2 className="text-lg md:text-xl font-semibold mt-2">このアプリでは、おもちに恋愛相談ができるよ</h2>
      </div>
      <p className='mt-6 text-lg md:text-xl'>おもちにタッチしてみてね！</p>
      <div className="flex flex-col md:flex-row items-center mt-8 w-full max-w-4xl relative">
        {/* 画像と吹き出しを横に並べるためのコンテナ */}
        <div className="flex flex-col md:flex-row items-center w-full relative">
          {/* 画像 */}
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg aspect-[4/7] h-[400px] md:h-[650px]" onClick={handleClick}>
            <Image
              src="/bunny.png"
              alt="Rabbit"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 640px) 80vw, (max-width: 768px) 50vw, (min-width: 769px) 400px"
            />
          </div>
          {/* 吹き出し */}
          {advice && (
            <div className="absolute md:relative md:ml-4 mt-4 md:mt-0 flex-grow z-10">
              <div className="chat chat-start">
                <div className="chat-bubble bg-white text-black p-4 rounded-lg shadow-lg" style={{ maxWidth: '100%' }}>
                  {advice}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-12 mb-4">
        <Link
          href="/advice_room"
          className="btn flex items-center gap-2 px-4 py-2 text-black font-bold shadow-md hover:bg-opacity-80 active:bg-opacity-90 transition-all"
          style={{ backgroundColor: 'rgb(238, 203, 213)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          おもちに恋愛相談をしてみる
        </Link>
      </div>
    </div>
  );
}
