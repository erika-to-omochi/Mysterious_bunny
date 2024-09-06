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
    <div className="container mx-auto text-center py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold mb-4 sm:text-2xl md:text-3xl">恋愛マスターおもちの相談室</h1>
      <div className="chat-container bg-gray-100 p-4 rounded shadow-md mb-4">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`chat ${chat.role === 'user' ? 'chat-end' : 'chat-start'} mb-2`}
          >
            {chat.role === 'user' && (
              <div className="chat-image avatar">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full">
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
            <div className="chat-bubble bg-white p-3 rounded shadow-md text-left max-w-xs mx-auto sm:max-w-sm md:max-w-md">
              {chat.content}
            </div>
            {chat.role === 'rabbit' && (
              <div className="chat-image avatar">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full">
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
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col sm:flex-row sm:gap-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border px-4 py-2 w-full mb-2 sm:mb-0 sm:w-3/4"
          placeholder="恋愛相談を書いてください..."
        />
        <button
          onClick={sendMessage}
          className="btn px-4 py-2 w-full sm:w-1/4 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition"
        >
          送信
        </button>
      </div>
    </div>
  );
}
