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
  title: "invdev",
  description: "My portfolio",
};

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
        <header className={`${baymanat.className} flex w-full h-20 items-center text-2xl sticky top-0`}>
          <nav className="flex px-10 w-full justify-between">
            <Link
              href='/'
              className='hover:text-red-600 transition-colors'
            >
              Invvd
            </Link>
            <ul className="flex flex-row gap-5">
              <li className="hover:text-red-600 transition-colors">
                <Link href='/'>
                  Inicio
                </Link>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <Link href='/projects'>
                  Proyectos
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
