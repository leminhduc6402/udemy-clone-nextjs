import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Educamy",
  description:
    "Học tập online, cùng nhau phát triển, nắm vững kiến thức, phát triển kỹ năng.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${roboto.variable} h-full antialiased`}
    >
      <body>
        <div className="wrapper grid grid-cols-[300px_1fr] h-screen">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
