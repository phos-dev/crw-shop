import React, { useState } from 'react';

import {
  UserOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Badge,
  Popover,
  Layout as AntdLayout,
  Button,
  Divider,
  Menu,
} from 'antd';
import Text from 'antd/lib/typography/Text';
import Image from 'next/image';

import logo from 'assets/images/crown.svg';
import cart from 'assets/images/shopping-cart.svg';
import NavLink from 'components/NavLink';

import { IMenuItem } from './interfaces';
import useContextMenuItems from './useContextMenuItems';

const { Header } = AntdLayout;

const CustomHeader = () => {
  const contextMenu = useContextMenuItems();
  const [showingMenu, setMenuVisibility] = useState<boolean>();
  const { user } = {
    user: {
      logged: true,
    },
  };
  const content = (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      className="flex-inline text-center border-transparent"
      inlineIndent={0}
    >
      <Menu.Item>
        <div className="flex justify-center items-center">
          <UnorderedListOutlined />
          <NavLink href="\orders" className="flex-1">
            Visualizar pedidos
          </NavLink>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="flex justify-center items-center">
          <SettingOutlined />
          <Text className="flex-1">Configurações da conta</Text>
        </div>
      </Menu.Item>
      <Divider className="my-2.5" />
      {/*! user */} <Button className="flex-1 w-full">Logout</Button>
    </Menu>
  );

  const handleMenuVisibility = () => {
    setMenuVisibility((prev) => !prev);
  };

  return (
    <Header className="bg-white m-0 flex justify-between px-14">
      <NavLink href="\" className="flex items-center gap-2">
        <Image src={logo} width="55px" height="55px" />
        <Text className="font-sans text-2xl">Kingstone</Text>
      </NavLink>
      <div className="flex items-center justify-end mx-0 gap-8">
        {contextMenu.map((e: IMenuItem, index) => (
          <NavLink
            key={index}
            notHoverEffect={false}
            href={e.url}
            showActive
            exact
            className="uppercase"
          >
            {e.label}
          </NavLink>
        ))}
        {!user && (
          <NavLink notHoverEffect={false} href="/auth/login">
            LOGIN
          </NavLink>
        )}
        <Badge count={100}>
          <Image src={cart} width="30px" height="30px" />
        </Badge>
        <Popover
          content={content}
          visible={showingMenu}
          trigger="click"
          onVisibleChange={handleMenuVisibility}
          placement="bottomRight"
          arrowPointAtCenter={false}
          overlayStyle={{ width: '300px' }}
        >
          <Avatar
            size={40}
            icon={<UserOutlined />}
            className="flex justify-center items-center"
          />
        </Popover>
      </div>
    </Header>
  );
};

export default CustomHeader;
