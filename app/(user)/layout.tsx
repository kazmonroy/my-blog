import Header from '../../components/Header';
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
      <body className='mx-auto max-w-6xl h-screen px-6'>
        <Header />
        {children}
      </body>
    </html>
  );
}
