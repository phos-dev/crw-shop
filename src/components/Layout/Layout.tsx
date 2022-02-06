import React from 'react';

import { Divider, Layout as AntdLayout } from 'antd';

import CustomHeader from './Header';

const { Content } = AntdLayout;

type ILayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ILayoutProps) => {
  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <CustomHeader />
      <Content className="bg-white flex flex-col h-full">
        <Divider className="mt-0" />
        {children}
      </Content>
      {/*
        <Footer className='bg-black text-center'>
          <Powered by PHOS>
        </Footer>
      */}
    </AntdLayout>
  );
};

export default Layout;
