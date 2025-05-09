import Modal from '@/components/ui/Modal';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'LearnLingo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {children}
        <Modal />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
