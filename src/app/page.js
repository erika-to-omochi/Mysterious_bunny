import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/toppage_bg.png)", // 背景画像を設定
      }}
    >
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Mysterious Bunny</h1>
          <p className="mb-5">恋愛マスターおもちの相談室</p>
          <Link 
            href="/chat-with-omochi"
            className="btn px-6 py-3 text-white font-bold shadow-md hover:bg-opacity-80 active:bg-opacity-90 transition-all"
            style={{ backgroundColor: '#cb8e7e', borderColor: '#cb8e7e', fontSize: '1rem', borderRadius: '0.5rem' }}
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
            おもちの恋愛相談室へ
          </Link>
        </div>
      </div>
    </div>
  );
}
