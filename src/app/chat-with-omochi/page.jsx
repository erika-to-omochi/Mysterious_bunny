'use client';

import React, { useState, useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import ChatBubble from '../../components/ChatBubble'; // 新しいチャットバブルコンポーネントをインポート

export default function RomanceBot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatContainerRef = useRef(null);

  const sendMessage = async () => {
    if (!message) return;

    // ユーザーのメッセージを履歴に追加
    const newChatHistory = [...chatHistory, { role: 'user', content: message }];
    setChatHistory(newChatHistory);

    // APIにメッセージを送信
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    // チャット履歴にAPIからの返答を追加
    setChatHistory([...newChatHistory, { role: 'rabbit', content: data.reply }]);
    setMessage(''); // 送信後に入力フィールドをクリア
  };

  // 新しいメッセージが追加されたら自動スクロール
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-[#645345]">
          恋愛マスター<br />おもちの相談室♥
        </h1>

        {/* チャットコンテナ */}
        <div
          ref={chatContainerRef}
          className="w-full max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-y-auto p-4 bg-[rgba(255,255,255,0.3)] rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-8"
        >
          {chatHistory.map((chat, index) => (
            <ChatBubble key={index} chat={chat} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-4 w-full max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl mb-4">
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

      {/* フッター */}
      <div className="w-full bg-[rgba(255,255,255,0)]">
        <Footer />
      </div>
    </div>
  );
}
