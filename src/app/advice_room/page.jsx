'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdviceRoom() {
  const router = useRouter();
  
  const initialMessages = React.useMemo(() => [
    "このアプリではおもちが独断と偏見で、<br/>恋愛について語ったり、アドバイスをするでちゅ",
    "①おもちの恋愛Botを見ること<br/>②おもちに恋愛相談にのってもらうこと<br/>この２つができるでちゅ",
    "このままおもちにタッチしていると、<br/>おもちのことや、うさのことについて、おしえてあげるでちゅよ",
  ], []);

  const [advice, setAdvice] = useState(initialMessages[0]);
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(1);
  const [isInitialMessage, setIsInitialMessage] = useState(true);

  useEffect(() => {
    if (!advice) return;

    let currentIndex = 0;
    setDisplayedText(''); 

    const intervalId = setInterval(() => {
      if (currentIndex < advice.length) {
        setDisplayedText(prev => prev + advice[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId); // インターバルをクリア
      }
    }, 50); // 50ミリ秒ごとに文字を表示

    return () => clearInterval(intervalId); // クリーンアップ関数でインターバルをクリア

  }, [advice]);

  const handleClick = () => {
    router.push('/chat-with-omochi');
  };

  const handleImageClick = () => {
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
      "おもちの好物はりんごだよ",
      "おもちの特技は気配を消すことだよ",
      "将来の夢はアナウンサーだよ",
      "おもち将来は野球選手と結婚したいな〜",
      "趣味はYogiboホリホリだよ"
    ];

    if (index < initialMessages.length) {
      setAdvice(initialMessages[index]);
      setIndex(prevIndex => prevIndex + 1); // 安全な状態更新
      setIsInitialMessage(true);
    } else {
      const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
      setAdvice(randomAdvice);
      setIsInitialMessage(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* サイドバー */}
      <div className="flex flex-col p-3 w-60 dark:bg-gray-50 dark:text-gray-800 fixed top-0 left-0 h-full">
        <div className="space-y-3">
          {/* 画像のコンテナ */}
          <div className="w-40 h-20">
            <Link href="/" passHref>
              <Image
                alt="Rabbit avatar"
                src="/home_icon.png"
                width={160}
                height={160}
                priority={true}
              />
            </Link>
          </div>
          {/* ボタンのリスト */}
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <button
                  onClick={handleClick}
                  type="button"
                  className="flex items-center space-x-2 p-2 rounded-md bg-[#cb8e7e] border-[#cb8e7e] text-white font-bold text-sm shadow-md hover:bg-opacity-80 active:bg-opacity-90 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current dark:text-gray-600"
                  >
                    <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                  </svg>
                  <span>おもちの相談室へ</span>
                </button>
              </li>
              <li className="rounded-sm">
                <button
                  onClick={() => router.push('#')}
                  type="button"
                  className="flex items-center space-x-2 p-2 rounded-md bg-[#cb8e7e] border-[#cb8e7e] text-white font-bold text-sm shadow-md hover:bg-opacity-80 active:bg-opacity-90 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current dark:text-gray-600"
                  >
                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                  </svg>
                  <span>おもちの恋愛BOTへ</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* メインコンテンツ */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Hello, おもちでちゅ</h1>
        
        {/* 吹き出し（アドバイス） */}
        <div className={`p-4 bg-white text-gray-800 rounded-md shadow-lg w-[400px] h-[120px] overflow-y-auto ${isInitialMessage ? '' : 'flex items-center justify-center text-center'}`}>
          <p dangerouslySetInnerHTML={{ __html: displayedText }} />
        </div>

        {/* 画像 */}
        <div
          className="relative cursor-pointer w-[300px] h-[250px] mt-4" 
          onClick={handleImageClick}
        >
          <Image
            src="/omochi01.png"
            alt="Rabbit"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
