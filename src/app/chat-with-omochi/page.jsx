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
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#645345] mt-8 text-center">
          恋愛マスター<br />おもちの相談室♥
        </h1>
      </div>

      {/* チャットコンテナ（固定高さ） */}
      <div
        ref={chatContainerRef}
        className="w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl h-[325px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-x-auto p-4 bg-[rgba(255,255,255,0.3)] rounded-lg shadow-lg sm:mb-2 md:mb-6 mx-auto"
        >
        {chatHistory.map((chat, index) => (
          <ChatBubble key={index} chat={chat} />
        ))}
      </div>

      {/* 入力エリア */}
      <div className="flex items-center gap-2 p-4">
  <input
    type="text"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="border border-gray-300 px-4 py-2 w-full sm:w-2/3 md:w-3/4 lg:w-5/6 rounded-xl focus:ring-2 focus:ring-custom-color outline-none transition-all duration-200"
    placeholder="恋愛相談を書いてください..."
  />
  <button
    onClick={sendMessage}
    className="btn px-4 py-2 w-auto sm:w-1/3 md:w-1/4 lg:w-1/6 rounded-xl bg-[#cb8e7e] text-white shadow-lg hover:bg-[#b77a6b] transition-transform transform hover:scale-105 duration-200"
  >
    送信
  </button>
</div>


      {/* フッター */}
      <Footer />
    </div>
  );
}