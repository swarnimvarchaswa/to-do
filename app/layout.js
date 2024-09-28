import { Roboto_Flex } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Flex({subsets: ["latin"]});

export const metadata = {
  title: "To Do",
  description: "To Do List App",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
