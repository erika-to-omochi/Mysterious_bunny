'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer';

export default function AdviceRoom() {
  const router = useRouter();

  // 固定メッセージ
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

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0); // 現在のメッセージのインデックス
  const [displayedText, setDisplayedText] = useState(''); // 表示されるテキスト
  const [charIndex, setCharIndex] = useState(0); // 現在表示中の文字のインデックス
  const [isMessageComplete, setIsMessageComplete] = useState(false); // メッセージが完了したかどうか

  useEffect(() => {
    if (charIndex < fixedMessages[currentMessageIndex].length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + fixedMessages[currentMessageIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 50); // 50ミリ秒ごとに文字を表示
      return () => clearTimeout(timeoutId); // クリーンアップ
    } else {
      setIsMessageComplete(true); // メッセージが全て表示されたら完了と設定
    }
  }, [charIndex, currentMessageIndex]);

  // クリックで次のメッセージへ
  const handleNextMessage = () => {
    if (isMessageComplete && currentMessageIndex < fixedMessages.length - 1) {
      setCurrentMessageIndex(currentMessageIndex + 1);
      setDisplayedText('');
      setCharIndex(0);
      setIsMessageComplete(false); // 次のメッセージに移るので未完了に戻す
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/adviceRoom_bg.png)', height: '100vh', width: '100vw', backgroundSize: 'cover' }}>
      <div className="flex h-screen">
        {/* メインコンテンツ */}
        <div className="flex-1 flex flex-col items-center justify-center" onClick={handleNextMessage}>
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Hello, おもちでちゅ♥</h1>
          {/* 吹き出し（メッセージ表示エリア） */}
          <div className="p-4 bg-[rgba(255,255,255,0.5)] text-gray-800 rounded-xl shadow-lg w-[350px] h-[110px] overflow-y-auto">
            <p dangerouslySetInnerHTML={{ __html: displayedText }} />
          </div>
          {/* 画像 */}
          <div className="relative cursor-pointer w-[275px] h-[370px] mt-4">
            <Image
              src="/omochi02.png"
              alt="Rabbit"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>

      {/* フッター */}
      <div style={{ position: 'absolute', bottom: '0', width: '100%', zIndex: '10' }}>
        <Footer />
      </div>
    </div>
  );
}
