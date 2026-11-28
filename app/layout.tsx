import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Educamy",
  description:
    "Học tập online, cùng nhau phát triển, nắm vững kiến thức, phát triển kỹ năng.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", manrope.variable, "font-sans", geist.variable)}>
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
