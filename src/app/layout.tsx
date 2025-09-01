import type { Metadata } from "next";
import "@/common/styles/frame.scss";
import AntdClientProvider from '@/app/antdClientProvider'
import FakeError from '@/components/fakeerror'

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
        <FakeError />
        <AntdClientProvider>{children}</AntdClientProvider>
      </body>
    </html>
  );
}
