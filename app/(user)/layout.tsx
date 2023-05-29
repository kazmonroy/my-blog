import Header from '../components/Header';
import '../globals.css';

export const metadata = {
  title: 'Home',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='mx-auto max-w-6xl h-full px-6 md:px-16 overflow-y-hidden'>
        <Header />
        {children}
      </body>
    </html>
  );
}