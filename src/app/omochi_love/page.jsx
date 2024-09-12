'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer'; // Footerのインポート

// クイズの質問と選択肢
const questions = [
  {
    question: "おもちが相手に良い印象を与えるためにしていることは？",
    options: ["清潔感を保つ", "相手に褒め言葉を贈る", "興味があるフリをする"],
    correct: "清潔感を保つ",
  },
  {
    question: "おもちが好意をアピールするときはどうしてる？",
    options: ["鼻でツンツンする", "お手をする", "「きゅう〜」と鳴く"],
    correct: "鼻でツンツンする",
  },
  {
    question: "おもちが相手の好意を確かめるためにしてることは？",
    options: ["直接聞いてみる", "相手の行動を観察する", "友達に聞いてもらう"],
    correct: "相手の行動を観察する",
  },
  {
    question: "おもちが思う長続きするカップルの秘訣は？",
    options: ["お互いの時間を大切にする", "頻繁にコミュニケーションをとる", "お互いの趣味を共有する"],
    correct: "頻繁にコミュニケーションをとる",
  },
  {
    question: "おもちがデート中に気をつけることは？",
    options: ["話題をたくさん提供する", "相手の話をよく聞く", "自分の趣味を押し付けない"],
    correct: "相手の話をよく聞く",
  },
  {
    question: "おもちがモテるために大事にしている心構えは？",
    options: ["自信を持つ", "常に笑顔でいる", "他人と比較しない"],
    correct: "自信を持つ",
  },
  {
    question: "おもちの結婚したい男No,1は？",
    options: ["ダルビッシュ有", "ひさじゅ校長", "オダギリジョー"],
    correct: "ひさじゅ校長",
  },
];

const OmochiLoveQuiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // 現在の質問を更新する
  useEffect(() => {
    if (questionIndex < questions.length) {
      setCurrentQuestion(questions[questionIndex]);
    } else {
      setQuizFinished(true);
    }
  }, [questionIndex]);

  // 回答を処理する
  const handleAnswer = (option) => {
    if (option === currentQuestion.correct) {
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  // Twitter共有用リンクの作成
  const tweetText = `おもちの恋愛クイズで${score}問正解したよ！ #おもちクイズ`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* コンテンツ部分 */}
      <div className="flex-grow flex flex-col lg:flex-row justify-center items-center p-4 sm:p-6 lg:p-10">
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-3/4 sm:w-1/2 lg:w-full h-auto">
            <Image
              src="/omochi07.png"
              alt="Omochi"
              layout="responsive" // 画像のレスポンシブ表示
              width={500}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* 右側：クイズの吹き出し */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-4 lg:p-8 flex-grow">
          {!quizFinished ? (
            <motion.div
              className="p-5 bg-[rgba(255,255,255,0.5)] rounded-lg shadow-lg w-full sm:w-3/4 lg:w-full text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs sm:text-sm lg:text-lg text-gray-800 mb-4">{currentQuestion?.question}</p>
              {currentQuestion?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="block w-full mb-3 px-3 py-2 bg-[#cb8e7e] text-white rounded-lg shadow-lg hover:bg-[#b77a6b] transition-all text-xs sm:text-sm lg:text-lg"
                >
                  {option}
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center w-full sm:w-3/4 lg:w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-4">クイズが終わりました！正解数: {score}</p>
              <a
                href={tweetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all text-xs sm:text-sm lg:text-lg"
              >
                Xで共有する
              </a>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footerをページ下部に固定 */}
      <Footer />
    </div>
  );
};

export default OmochiLoveQuiz;
