import type { Metadata } from "next";
import "@/common/styles/frame.scss";
import AntdClientProvider from '@/app/antdClientProvider'
import {ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';

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
        <ConfigProvider locale={zhCN}>
          <AntdClientProvider>{children}</AntdClientProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
