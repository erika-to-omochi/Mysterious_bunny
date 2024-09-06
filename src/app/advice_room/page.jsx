import Link from 'next/link';

export default function RabbitFacts() {
  return (
    <div className="container mx-auto text-center py-8">
      <h1 className="text-3xl font-bold mb-4">おもちの恋愛相談室へようこそ</h1>
      <p className="text-lg mb-8">ここではおもちが独断と偏見で恋愛のアドバイスをつぶやきます</p>
      <div className="mt-4 flex gap-4 justify-center">
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="/bunny_heart.png" // ローカル画像を正しく参照
              alt="chat"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">おもちの恋愛Bot</h2>
            <p>おもちにの独断と偏見で恋愛にまつわるあれこれをつぶやきます</p>
            <div className="card-actions justify-center mt-4">
              <Link
                href="/bunny-bot"
                className="btn flex items-center gap-2 px-4 py-2 text-black font-bold shadow-md hover:bg-opacity-80 active:bg-opacity-90 transition-all"
                style={{ backgroundColor: 'rgb(238, 203, 213)' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                みんなの本音（おもち調べ）
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="/bunny_with_phone.png" // ローカル画像を正しく参照
              alt="chat"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">おもちの恋愛相談チャット</h2>
            <p>おもちに直接、恋愛相談ができますよ。モテるテクニックや身だしなみ、マナーなども教えてくれます。</p>
            <div className="card-actions justify-center mt-4">
              <Link
                href="/chat-with-omochi"
                className="btn flex items-center gap-2 px-4 py-2 text-black font-bold shadow-md hover:bg-opacity-80 active:bg-opacity-90 transition-all"
                style={{ backgroundColor: 'rgb(238, 203, 213)' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                チャットでおもちに相談
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
