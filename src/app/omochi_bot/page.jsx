'use client';  // クライアントコンポーネントを宣言

import { useRouter } from 'next/navigation';  // next/navigation からインポート
import Footer from '../../components/Footer';
import Image from 'next/image';
import React from 'react';

export default function OmochiLoveBot() {
  const router = useRouter();  // routerを定義

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area that takes up remaining space */}
      <div className="flex flex-col items-center justify-center flex-grow p-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#645345] text-center mb-8">
          おもちの恋愛BOT
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="bg-[rgba(255,255,255,0.5)] bg-opacity-90 p-6 rounded-xl shadow-md text-center">
            <Image src="/omochi04.png" width={150} height={150} alt="Rabbit 1" className="mx-auto mb-4" />
            <h2 className="font-bold mb-2 text-[#645345]">おもちの恋愛クイズ</h2>
            <p className="font-bold mb-2 text-[#645345]">
              おもちの恋愛観や気をつけていることを、クイズにしたでちゅ。人間にも共通することがあるかもしれないから、みんなに教えちゃうでちゅ。
            </p>
            <button
              onClick={() => router.push('/omochi_love')}  // ここでrouter.pushを使用してページ遷移
              className="mt-4 px-4 py-2 bg-[#cb8e7e] text-white rounded-lg shadow-lg hover:bg-[#b77a6b] transition-all"
            >
              もっと見る
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[rgba(255,255,255,0.5)] bg-opacity-90 p-6 rounded-xl shadow-md text-center">
            <Image src="/omochi05.png" width={150} height={150} alt="Rabbit 2" className="mx-auto mb-4" />
            <h2 className="font-bold mb-2 text-[#645345]">モテるテクニック</h2>
            <p className="font-bold mb-2 text-[#645345]">おもち直伝！おもちの可愛さと、おもちがかわいい理由を伝授するでちゅ。</p>
            <button
              onClick={() => alert('リンク先はまだ準備中です')}
              className="mt-4 px-4 py-2 bg-[#cb8e7e] text-white rounded-lg shadow-lg hover:bg-[#b77a6b] transition-all"
            >
              準備中
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[rgba(255,255,255,0.5)] bg-opacity-90 p-6 rounded-xl shadow-md text-center">
            <Image src="/omochi06.png" width={150} height={150} alt="Rabbit 3" className="mx-auto mb-4" />
            <h2 className="font-bold mb-2">恋する気持ち</h2>
            <p>
              恋する気持ちがどんなのか、おもちの独断と偏見でつぶやくでちゅ。おもち、ポエムとか好きなんだよね〜
            </p>
            <button
              onClick={() => alert('リンク先はまだ準備中です')}
              className="mt-4 px-4 py-2 bg-[#cb8e7e] text-white rounded-lg shadow-lg hover:bg-[#b77a6b] transition-all"
            >
              準備中
            </button>
          </div>
        </div>
      </div>

      {/* Footer that stays at the bottom */}
      <Footer />
    </div>
  );
}