
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DG Green Farms Indore — Luxury Resort & Staycation',
  description: 'Experience pure seclusion at DG Green Farms, Indore.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans bg-luxury-dark text-white">
        {children}
      </body>
    </html>
  );
}
