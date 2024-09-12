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
    <div className="min-h-screen flex flex-col justify-between">
      {/* タイトル */}
      <div className="p-2 sm:p-4 md:p-6 lg:p-8"> {/* 余白を少なく */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-center text-[#645345]">
          恋愛マスター<br />おもちの相談室♥
        </h1>
      </div>

      {/* チャットコンテナ（高さを広げ、余白を減らす） */}
      <div
        ref={chatContainerRef}
        className="w-full max-w-7xl flex-grow h-[65vh] overflow-y-auto p-2 sm:p-4 bg-[rgba(255,255,255,0.3)] rounded-lg shadow-lg mx-auto" // 高さを65vhに設定
      >
        {chatHistory.map((chat, index) => (
          <ChatBubble key={index} chat={chat} />
        ))}
      </div>

      {/* 入力エリア（余白を減らしてフッターに近づける） */}
      <div className="flex items-center gap-2 p-2 sm:p-4 border-t border-gray-300">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 px-3 py-2 w-full rounded-xl focus:ring-2 focus:ring-custom-color outline-none transition-all duration-200"
          placeholder="恋愛相談を書いてください..."
        />
        <button
          onClick={sendMessage}
          className="px-3 py-2 rounded-xl bg-[#cb8e7e] text-white shadow-lg hover:bg-[#b77a6b] transition-transform transform hover:scale-105 duration-200"
        >
          送信
        </button>
      </div>

      <Footer />
    </div>
  );
}
