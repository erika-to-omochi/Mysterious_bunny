'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
    <div className="min-h-screen bg-[rgba(255,255,255,0.5)] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">恋愛マスター<br />♥おもちの相談室♥</h1>
      
      {/* チャットコンテナ */}
      <div
        ref={chatContainerRef}
        className="w-full max-w-3xl h-[400px] overflow-y-auto p-4 bg-white rounded-lg shadow-lg mb-4"
      >
        {chatHistory.map((chat, index) => (
          <ChatBubble key={index} chat={chat} />
        ))}
      </div>

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
      
      <div style={{ position: 'absolute', bottom: '0', width: '100%', zIndex: '10' }}>
        <Footer />
      </div>
    </div>
  );
}