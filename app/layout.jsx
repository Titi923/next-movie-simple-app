import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Navbar */}
        <nav>
          <ul className='flex m-2'>
            <li className='m-2'>
              <a href="/">Logo</a>
            </li>
            <li className='m-2'>
              <a href="/">Home</a>
            </li>
            <li className='m-2'>
              <a href="/about">about</a>
            </li>
          </ul>
        </nav>
        {/* Navbar END */}

        {children}
      </body>
    </html>
  );
}
