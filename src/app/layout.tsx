import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const baymanat = localFont({ src: './fonts/Baymanat.woff2' })

export const metadata: Metadata = {
  title: "invvd",
  description: "My portfolio",
};

export const MenuSvg = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <header className={`${baymanat.className} flex w-full h-20 justify-center items-center text-3xl sticky top-0`}>
            <Link
              href='/'
              className='relative hover:text-red-600 transition-colors'
            >
              Invvd
            </Link>
          <nav className="flex px-10 right-0 absolute">
            <button className="hover:text-red-600 transition">
              <MenuSvg/>
            </button>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
