import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import { manrope } from "@/utils";

export const metadata: Metadata = {
  title: "Educamy",
  description:
    "Học tập online, cùng nhau phát triển, nắm vững kiến thức, phát triển kỹ năng.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
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
