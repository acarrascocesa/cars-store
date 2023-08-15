import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Car Store',
  description: 'Rent Car App',
};

// search context provider
import { SearchContextProvider } from './context/search';

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
