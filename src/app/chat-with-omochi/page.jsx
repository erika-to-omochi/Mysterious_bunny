'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RomanceBot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    // ユーザーのメッセージを履歴に追加
    setChatHistory([...chatHistory, { role: 'user', content: message }]);

    // APIにメッセージを送信
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setChatHistory([...chatHistory, { role: 'user', content: message }, { role: 'rabbit', content: data.reply }]);
    setMessage(''); // 送信後に入力フィールドをクリア
  };

  return (
    <div className="min-h-screen bg-[rgba(255,255,255,0.5)] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">恋愛マスター<br />♥おもちの相談室♥</h1>
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`flex items-start ${chat.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
          >
            {chat.role === 'rabbit' && (
              <div className="chat-image avatar mr-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                  <Image
                    alt="Rabbit avatar"
                    src="/bunny.png" // 画像のパス
                    layout="responsive"
                    width={100} // 画像の幅
                    height={100} // 画像の高さ
                  />
                </div>
              </div>
            )}
            <div
              className={`chat-bubble p-4 rounded-2xl shadow-lg text-left max-w-xs sm:max-w-sm md:max-w-md ${
                chat.role === 'user' ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'
              }`}
            >
              {chat.content}
            </div>
            {chat.role === 'user' && (
              <div className="chat-image avatar ml-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                  <Image
                    alt="User avatar"
                    src="/bunny.png" // 画像のパス
                    layout="responsive"
                    width={100} // 画像の幅
                    height={100} // 画像の高さ
                  />
                </div>
              </div>
            )}
          </div>
        ))}

      <div className="mt-6 flex flex-col sm:flex-row sm:gap-4 w-full max-w-3xl">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full mb-2 sm:mb-0 sm:w-3/4 rounded-xl focus:ring-2 focus:ring-custom-color outline-none transition-all duration-200"
          placeholder="恋愛相談を書いてください..."
        />
        <button
          onClick={sendMessage}
          className="btn px-4 py-2 w-full sm:w-1/4 rounded-xl bg-[#cb8e7e] text-white shadow-lg hover:bg-[#b77a6b] transition-transform transform hover:scale-105 duration-200"
        >
          送信
        </button>
      </div>
    </div>
  );
}
