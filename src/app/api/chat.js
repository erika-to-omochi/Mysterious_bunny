// app/romance-bot/page.jsx
'use client';

import { useState } from 'react';

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
    <div className="container mx-auto text-center py-8">
      <h1 className="text-3xl font-bold mb-4">恋愛マスターおもちの相談室</h1>
      <div className="chat-box bg-gray-100 p-4 rounded shadow-md">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat ${chat.role === 'user' ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt={`${chat.role} avatar`}
                  src="/bunny.png" // ここで画像のパスを指定
                />
              </div>
            </div>
            <div className="chat-bubble">
              {chat.role === 'user' ? 'あなた: ' : 'うさぎ: '}
              {chat.content}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border px-4 py-2 w-full"
          placeholder="恋愛相談を書いてください..."
        />
        <button onClick={sendMessage} className="btn mt-2 px-4 py-2 bg-blue-500 text-white">送信</button>
      </div>
    </div>
  );
}
