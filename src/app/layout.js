import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'; // Headコンポーネントをインポート

export const metadata = {
  title: "Mysterious Bunny",
  description: "The Bunny Offers Relationship Tips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          {/* Open Graphメタタグ */}
          <meta property="og:title" content="Mysterious Bunny" />
          <meta property="og:description" content="恋愛系マスターおもちの相談室" />
          <meta property="og:image" content="https://mysterious-bunny.vercel.app/ogc_image.png" />
          <meta property="og:url" content="https://mysterious-bunny.vercel.app/" />
          <meta property="og:type" content="website" />

          {/* Twitterカードメタタグ */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mysterious Bunny" />
          <meta name="twitter:description" content="恋愛系マスターおもちの相談室" />
          <meta name="twitter:image" content="https://mysterious-bunny.vercel.app/ogc_image.png" />
          <meta name="twitter:url" content="https://mysterious-bunny.vercel.app/" />
        </Head>

        {/* 左上のロゴ画像 */}
        <div className="absolute top-0 left-0 p-4 z-20">
          <Link href="/" passHref>
            <Image
              src="/title_logo.png"
              alt="Title Logo"
              width={150}
              height={50}
              className="w-[100px] h-auto sm:w-[100px] md:w-[160px] lg:w-[175px]"
              priority
            />
          </Link>
        </div>

        {/* ページの内容 */}
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
