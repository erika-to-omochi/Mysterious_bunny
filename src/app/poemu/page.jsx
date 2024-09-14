'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../../components/Footer';

const poems = [
  "恋する気持ちって、まるで春の花が咲くみたいでちゅ。心の中にふわっと温かい感情が広がって、毎日が色とりどりで楽しくなるんでちゅよ。",
  "君の笑顔を見ると、心がにんじんのように甘くなるでちゅ。どんなに疲れても、君の顔を思い浮かべると、元気が出るんでちゅ！",
  "恋する気持ちって、ふわふわの羽根に乗って空を飛んでる感じでちゅ。どこまでも君と一緒にいたいと思う気持ちは、まるで無限大でちゅ。",
  "君といると、心がうさぎのようにぴょんぴょん跳ねるんでちゅ。毎日が楽しくて、時々現実を忘れちゃうこともあるんでちゅよ。",
  "恋って、にんじんのようにほんのり甘いけれど、時々ちょっぴりスパイシーで驚くこともあるんでちゅ。そんな気持ちもまた、素敵でちゅね。",
  "君といると、世界が一段と輝いて見えるでちゅ。君のそばにいるだけで、心がぽかぽか暖かくなるんでちゅよ。",
  "恋する気持ちは、まるで夜空に浮かぶ星のようにキラキラしてるでちゅ。君がいれば、どんなに暗い夜でも、心が明るく照らされるんでちゅ。",
  "君のことを考えると、心がまるでふわふわのモフモフでいっぱいになるんでちゅ。こんなにも君が大好きだなんて、自分でもびっくりでちゅ！",
  "恋愛って、まるでうさぎの毛がふわふわに伸びるように、心もどんどん広がっていく感じでちゅ。君がいるだけで、もっともっと幸せでちゅ。",
  "恋する気持ちは、まるでにんじん畑の中で君と一緒にいるときのように、自然と心が穏やかで幸せになるでちゅ。君との時間が、一番のごちそうでちゅ！"
];

const App = () => {
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0); // 現在表示されているポエムのインデックス

  const handleNextPoem = () => {
    // 最後のポエムに到達したら最初に戻る
    setCurrentPoemIndex((prevIndex) => (prevIndex + 1) % poems.length);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen items-center p-8">
      <div className="flex-grow flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#645345] mb-8">おもちの恋愛ポエム</h1>

        {/* ポエムのアニメーション表示 */}
        <div className="relative max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPoemIndex} // 現在のポエムのインデックスをキーとして使用
              initial={{ opacity: 0, x: -50 }} // フェードイン前の初期状態
              animate={{ opacity: 1, x: 0 }} // フェードインのアニメーション
              exit={{ opacity: 0, x: 50 }} // フェードアウトのアニメーション
              transition={{ duration: 0.5 }} // アニメーションの持続時間
              className="p-6 bg-[rgba(255,255,255,0.5)] rounded-lg shadow-lg text-center text-lg font-medium text-gray-800"
            >
              {poems[currentPoemIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 次へボタン */}
        <motion.button
          className="mt-8 px-6 py-3 bg-[#cb8e7e] text-white rounded-lg shadow-lg hover:bg-[#b77a6b] transition-all"
          onClick={handleNextPoem}
          whileHover={{ scale: 1.05 }} // ホバリング時のアニメーション
          whileTap={{ scale: 0.95 }} // クリック時のアニメーション
        >
          次へ
        </motion.button>
      </div>
      <Footer />
    </div>
  );
};

export default App;
