import { Outfit,Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],weight:[ "400" ,"500","600","700" ]
});

const ovo = Ovo({
  subsets: ["latin"],weight:["400"]
});

export const metadata = {
  title: 'Amir Ashrafi Portfolio',
  description: 'A personal portfolio website built with Next.js and Tailwind CSS.',
  openGraph: {
    title: 'Amir Ashrafi Portfolio',
    description: 'Modern and responsive portfolio site built using Next.js.',
    url: 'https://portfolio-g31tjep4m-as-projects-41f631cb.vercel.app',
    images: [
      {
        url: 'https://yourdomain.com/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} min-h-screen w-11/12 md:w-full antialiased leading-8 overflow-x-hidden dark:bg-darkTheme  dark:text-white `}
      >
        {children}
      </body>
    </html>
  );
}
