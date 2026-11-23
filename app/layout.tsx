import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Educamy",
  description:
    "Học tập online, cùng nhau phát triển, nắm vững kiến thức, phát triển kỹ năng.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body>
        <ClerkProvider>
          {children}
          {/* <div className="wrapper grid h-screen grid-cols-[300px_1fr]">
            <Sidebar />
            <div className="flex items-center justify-center">
              <main>{children}</main>
            </div>
          </div> */}
        </ClerkProvider>
      </body>
    </html>
  );
}
