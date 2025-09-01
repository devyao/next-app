'use client';

import '@ant-design/v5-patch-for-react-19';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';

import{AntdRegistry} from '@ant-design/nextjs-registry';

export default function AntdClientProvider({ children }: { children: React.ReactNode }) {
    return (
        <AntdRegistry>
            <ConfigProvider locale={zhCN}>
                {children}
            </ConfigProvider>
        </AntdRegistry>
    );
}