import '../globals.css';
import Header from '../components/Header';
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='max-w-7xl mx-auto bg-zinc-50'>
        <Header />
        {children}
      </body>
    </html>
  );
}
