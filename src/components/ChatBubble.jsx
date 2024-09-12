import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ChatBubble = ({ chat }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // 一度だけトリガーする
    threshold: 0.1,    // 10%がビューポートに入ったときにトリガー
  });

  return (
    <div
      ref={ref}  // IntersectionObserverのターゲットとなる要素にrefを設定
      className={`flex items-start ${chat.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
    >
      {/* うさぎのアイコン */}
      {chat.role === 'rabbit' && (
        <div className="chat-image avatar mr-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
            <Image alt="omochi01.png" src="/omochi01.png" layout="responsive" width={100} height={100} />
          </div>
        </div>
      )}
      {/* チャットメッセージ */}
      <motion.div
        className={`chat-bubble p-4 rounded-2xl shadow-lg text-left max-w-xs sm:max-w-sm md:max-w-md ${
          chat.role === 'user' ? 'bg-white text-gray-800' : 'bg-white text-gray-800'
        }`}
        initial={{ opacity: 0, y: 20 }}  // 初期状態
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}  // ビューポートに入ったときのアニメーション
        transition={{ duration: 0.5 }}  // アニメーションの持続時間
      >
        {chat.content}
      </motion.div>
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
