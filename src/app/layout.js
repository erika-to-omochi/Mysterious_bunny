import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: "Mysterious Bunny",
  description: "The Bunny Offers Relationship Tips",
  openGraph: {
    title: "Mysterious Bunny",
    description: "恋愛系マスターおもちの相談室",
    images: [
      {
        url: "https://mysterious-bunny.vercel.app/ogp.png",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://mysterious-bunny.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mysterious Bunny",
    description: "恋愛系マスターおもちの相談室",
    images: [
      "https://mysterious-bunny.vercel.app/ogp.png",
    ],
    url: "https://mysterious-bunny.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Open Graphメタタグ */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitterカードメタタグ */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:url" content={metadata.twitter.url} />
      </head>
      <body>
        {/* Google Analyticsのスクリプト */}
        <Script
          id="gtag-script"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-F5LB1B077N`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F5LB1B077N');
            `,
          }}
        />
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
