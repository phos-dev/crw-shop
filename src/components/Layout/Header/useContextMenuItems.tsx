import { useRouter } from 'next/router';

import { IMenuItem } from './interfaces';

const useContextMenuItems = () => {
  const router = useRouter();
  const menuItems: Array<IMenuItem> = [
    {
      label: 'login',
      url: '/auth/login',
    },

    {
      label: 'shop',
      url: '/shop',
    },
  ];

  // ShopContext
  if (router.pathname === '/shop') {
    menuItems.unshift({
      label: 'digitais',
      url: '/shop/digital',
    });
  }
  return menuItems;
};

export default useContextMenuItems;
