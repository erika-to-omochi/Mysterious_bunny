'use client'; // これを追加してクライアントコンポーネントに指定

import { useRouter } from 'next/navigation'; // next/navigation から useRouter をインポート
import { PiRabbitLight } from 'react-icons/pi';  // アイコンを正しくインポート

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="flex justify-center space-x-4 p-4">
      {/* HOMEボタン */}
      <button
        onClick={() => router.push('/advice_room')}
        type="button"
        className="flex items-center justify-center p-2 bg-[#cb8e7e] text-white font-bold rounded-lg shadow-lg hover:bg-[#b77a6b] hover:scale-105 transition-all duration-300 sm:p-3 sm:text-lg md:p-4 md:text-xl"
        style={{ height: '56px' }}  // ボタンの高さを固定
      >
        <PiRabbitLight className="mr-2" />
        <span>Home</span>
      </button>

      {/* 相談CHATボタン */}
      <button
        onClick={() => router.push('/chat-with-omochi')}
        type="button"
        className="flex items-center justify-center p-2 bg-[#cb8e7e] text-white font-bold rounded-lg shadow-lg hover:bg-[#b77a6b] hover:scale-105 transition-all duration-300 sm:p-3 sm:text-lg md:p-4 md:text-xl"
        style={{ height: '56px' }}  // ボタンの高さを固定
      >
        <PiRabbitLight className="mr-2" />
        <span>相談Chat</span>
      </button>

      {/* 恋愛BOTボタン */}
      <button
        onClick={() => router.push('/omochi_bot')}
        type="button"
        className="flex items-center justify-center p-2 bg-[#cb8e7e] text-white font-bold rounded-lg shadow-lg hover:bg-[#b77a6b] hover:scale-105 transition-all duration-300 sm:p-3 sm:text-lg md:p-4 md:text-xl"
        style={{ height: '56px' }}  // ボタンの高さを固定
      >
        <PiRabbitLight className="mr-2" />
        <span>恋愛Bot</span>
      </button>
    </footer>
  );
}
