import type { Metadata } from "next";
import "@/common/styles/frame.scss";
import AntdClientProvider from '@/app/antdClientProvider'

export const metadata: Metadata = {
  title: "My Next.js 15 App",
  description: "Next.js 15教学项目",
  keywords: "Next.js,React,前端开发",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AntdClientProvider>{children}</AntdClientProvider>
      </body>
    </html>
  );
}
