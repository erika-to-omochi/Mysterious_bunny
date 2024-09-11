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
    "このアプリではおもちが独断と偏見で、<br/>恋愛について語ったり<br/>アドバイスをするでちゅ",
    "①おもちの恋愛Botを見ること<br/>②おもちに恋愛相談にのってもらうこと<br/>この２つができるでちゅ",
    "このままおもちにタッチしていると<br/>おもちのことや、うさぎのことについて<br/>おしえてあげるでちゅよ",
    "おもちの歯は一生伸び続けるよ",
    "おもちはお鼻でツンツンするよ",
    "おもち、胃は弱いよ",
    "怒った時は足ダンするよ",
    "おもち、視野はほぼ360度あるよ",
    "うさぎは最大３ｍくらい飛ぶぞ",
    "おもちの歯は２８本あるよ",
    "おもちはリーダー気質だよ",
    "おもちの耳は体温調整もしてるよ",
    "おもちの好物はりんごだよ",
    "おもちの特技は気配を消すことだよ",
    "将来の夢はアナウンサーだよ",
    "おもち将来は野球選手と結婚したいな〜",
    "趣味はYogiboホリホリだよ"
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
    <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/adviceRoom_bg.png)', height: '100vh', width: '100vw' }}>

      {/* 左上のロゴ画像 */}
      <div className="absolute top-0 left-0 p-4">
        <Image
          src="/title_logo.png"
          alt="Title Logo"
          layout="responsive"  // レスポンシブ表示を有効にする
          width={150}          // 基本の幅を設定
          height={50}          // 基本の高さを設定（比率は維持）
          className="w-[100px] h-auto sm:w-[100px] md:w-[115px] lg:w-[130px]"  // 画面サイズごとの幅を設定
          priority
        />
      </div>


      <div className="flex flex-col md:flex-row h-screen items-center justify-center px-4 md:px-8 lg:px-12">
        {/* メインコンテンツ */}
        <div className="flex flex-col md:flex-row items-center justify-center" onClick={handleNextMessage}>
          {/* 画像 */}
          <div className="relative cursor-pointer w-[200px] h-[270px] sm:w-[250px] sm:h-[340px] md:w-[275px] md:h-[370px] lg:w-[300px] lg:h-[400px]">
            <Image
              src="/omochi02.png"
              alt="Rabbit"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* タイトルと吹き出しのメッセージを横並びにする */}
          <div className="flex flex-col ml-4 sm:ml-6 md:ml-8 lg:ml-12 mt-10items-center"> {/* 吹き出しを中央に配置 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black text-center"> {/* タイトルを中央に配置 */}
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
