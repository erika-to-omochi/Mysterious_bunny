'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function AdviceRoom() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isMessageComplete, setIsMessageComplete] = useState(false);

  const fixedMessages = [
    "ようこそでちゅ<br/>おもちにタッチしてね♥",
    "このアプリではおもちが独断と偏見で、<br/>恋愛について語ったり<br/>アドバイスをするでちゅ",
    "①おもちにCHATで恋愛相談にのってもらうこと<br/>②おもちの恋愛Botを見ること<br/>ができるから下のボタンをクリックしてね",
  ];

  useEffect(() => {
    if (charIndex < fixedMessages[currentMessageIndex].length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + fixedMessages[currentMessageIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearTimeout(timeoutId);
    } else {
      setIsMessageComplete(true);
    }
  }, [charIndex, currentMessageIndex]);

  const handleNextMessage = () => {
    if (isMessageComplete && currentMessageIndex < fixedMessages.length - 1) {
      setCurrentMessageIndex(currentMessageIndex + 1);
      setDisplayedText('');
      setCharIndex(0);
      setIsMessageComplete(false);
    }
  };

  return (
    <div className="relative h-[100vh] w-[100vw]">
      <Image
        src="/adviceRoom_bg.png"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="z-0"
      />
  <div className="relative flex flex-col md:flex-row h-screen items-center justify-center px-4 md:px-8 lg:px-12 z-10">
    {/* メインコンテンツ */}
    <div className="flex flex-col md:flex-row items-center justify-center" onClick={handleNextMessage}>
      {/* 画像 */}
      <div className="relative cursor-pointer w-[200px] h-[270px] sm:w-[250px] sm:h-[340px] md:w-[275px] md:h-[370px] lg:w-[300px] lg:h-[400px]">
        <Image
          src="/omochi02.png"
          alt="Rabbit"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 600px) 100vw, 50vw"
          priority
          className="z-10" // 画像の z-index を設定
        />
      </div>

      {/* タイトルと吹き出しのメッセージを横並びにする */}
      <div className="flex flex-col ml-4 sm:ml-6 md:ml-8 lg:ml-12 mt-10 items-center z-10"> {/* 吹き出しを中央に配置 */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-[#645345]">
          Hello, おもちでちゅ♥
        </h1>
        {/* 吹き出し（メッセージ表示エリア） */}
        <div className="flex justify-center w-full mb-5"> {/* 吹き出しを中央に配置 */}
          <div className="p-2 sm:p-4 bg-[rgba(255,255,255,0.5)] text-gray-800 rounded-xl shadow-lg
            w-[325px] sm:w-[280px] md:w-[350px] lg:w-[400px] /* 吹き出しの幅を設定 */
            h-[120px] sm:h-[120px] md:h-[150px] lg:h-[110px]
            overflow-y-auto text-left"> {/* テキストを左寄せ */}
            <p dangerouslySetInnerHTML={{ __html: displayedText }} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</div>
  );
}