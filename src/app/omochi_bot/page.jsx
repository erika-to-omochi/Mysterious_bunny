import Footer from '@/components/Footer';
import Image from 'next/image';
import React from 'react';

export default function OmochiLoveBot() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area that takes up remaining space */}
      <div className="flex flex-col items-center justify-center flex-grow p-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-[#645345] mb-10 text-center">
          (※ 準備中)おもちの恋愛BOT
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="bg-[rgba(255,255,255,0.5)] bg-opacity-90 p-6 rounded-xl shadow-md text-center">
            <Image src="/omochi04.png" width={150} height={150} alt="Rabbit 1" className="mx-auto mb-4" />
            <h2 className="font-bold mb-2">みんなの気持ちを代弁</h2>
            <p>
              みんなの意見も募集してまちゅ。普段は言いにくいパートナーへの不満や、言われて傷ついたことなどを、おもちが代弁しまちゅ！
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[rgba(255,255,255,0.5)] bg-opacity-90 p-6 rounded-xl shadow-md text-center">
            <Image src="/omochi05.png" width={150} height={150} alt="Rabbit 2" className="mx-auto mb-4" />
            <h2 className="font-bold mb-2">モテるテクニック</h2>
            <p>おもち直伝！モテるテクニックを伝授するでちゅ。</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[rgba(255,255,255,0.5)] bg-opacity-90 p-6 rounded-xl shadow-md text-center">
            <Image src="/omochi06.png" width={150} height={150} alt="Rabbit 3" className="mx-auto mb-4" />
            <h2 className="font-bold mb-2">恋する気持ち</h2>
            <p>
              恋する気持ちがどんなのか、おもちの独断と偏見でつぶやくでちゅ。おもち、ポエムとか好きなんだよね〜
            </p>
          </div>
        </div>
      </div>

      {/* Footer that stays at the bottom */}
      <Footer />
    </div>
  );
}
