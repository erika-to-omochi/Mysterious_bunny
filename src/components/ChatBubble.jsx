import React from 'react';
import Image from 'next/image';

const ChatBubble = ({ chat }) => {
  return (
    <div className={`flex items-start ${chat.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      {/* うさぎのアイコン */}
      {chat.role === 'rabbit' && (
        <div className="chat-image avatar mr-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
            <Image alt="Rabbit avatar" src="/bunny.png" layout="responsive" width={100} height={100} />
          </div>
        </div>
      )}
      {/* チャットメッセージ */}
      <div
        className={`chat-bubble p-4 rounded-2xl shadow-lg text-left max-w-xs sm:max-w-sm md:max-w-md ${
          chat.role === 'user' ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'
        }`}
      >
        {chat.content}
      </div>
      {/* ユーザーのアイコン */}
      {chat.role === 'user' && (
        <div className="chat-image avatar ml-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
            <Image alt="User avatar" src="/user.png" layout="responsive" width={100} height={100} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
