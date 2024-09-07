import './globals.css';

export const metadata = {
  title: "mysterious bunny",
  description: "The Bunny Offers Relationship Tips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
