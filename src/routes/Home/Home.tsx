import React from 'react';

import Gallery from './Gallery';
import { IItem } from './interfaces';

const Home = () => {
  const items: Array<IItem> = [
    {
      slug: 'smartwatches',
      name: 'SMARTWATCHES',
      image: 'https://wallpaperaccess.com/full/2067364.jpg',
      className: 'flex-1',
    },
    {
      slug: 'quartz',
      name: 'QUARTZ',
      image:
        'https://cdn.improb.com/wp-content/uploads/2019/11/Best-Quartz-Watches.jpg',
      className: 'w-96',
    },
    {
      slug: 'mechanical',
      name: 'MECÂNICOS',
      image:
        'https://c4.wallpaperflare.com/wallpaper/276/910/406/clocks-watch-ulysse-nardin-wallpaper-preview.jpg',
      className: 'w-full',
    },
    {
      slug: 'sports',
      name: 'ESPORTIVOS',
      image: 'https://images3.alphacoders.com/100/1003359.jpg',
      className: 'flex-1',
    },
    {
      slug: 'digitals',
      name: 'DIGITAIS',
      image:
        'https://cdn.hiconsumption.com/wp-content/uploads/2020/06/Best-Digital-Watches-0-Hero.jpg',
      className: 'flex-1',
    },
  ];
  return (
    <div className="flex items-center px-20 pb-5 gap-2 h-full">
      <Gallery items={items} />
    </div>
  );
};

export default Home;
