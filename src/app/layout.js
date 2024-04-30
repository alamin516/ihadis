import "./globals.css";

export const metadata = {
  title: "iHadis.com - Read Hadith Online",
  description: "Sunnah &amp; Hadith Of Prophet Muhammad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
