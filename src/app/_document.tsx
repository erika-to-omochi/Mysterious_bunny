import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Mysterious Bunny" />
        <meta property="og:description" content="恋愛系マスターおもちの相談室" />
        <meta property="og:image" content="https://mysterious-bunny.vercel.app/ogc_image.png" />
        <meta property="og:url" content="https://mysterious-bunny.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mysterious Bunny" />
        <meta name="twitter:description" content="恋愛系マスターおもちの相談室" />
        <meta name="twitter:image" content="https://mysterious-bunny.vercel.app/ogc_image.png" />
        <meta name="twitter:url" content="https://mysterious-bunny.vercel.app/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
