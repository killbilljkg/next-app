import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { sora, trajan } from "./fonts";
import "./globals.css";
import LenisProvider from "./Utils/LenisProvider";


export const metadata = {
  title: {
    default: 'ARCA AI – AI Solutions for Healthcare',
    template: '%s | ARCA AI',
  },
  description:
    'ARCA AI builds intelligent healthcare solutions across clinical, operational, and community health.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${trajan.variable}`}>
      <body>
        <LenisProvider>
          <Navbar />
            {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
