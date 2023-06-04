import Footer from '../components/Footer';
import Header from '../components/Header';
import '../globals.css';

export const metadata = {
  title: 'Home',
  description: 'Home page',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='mx-auto max-w-6xl h-full px-6 md:px-12 overflow-x-hidden'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
