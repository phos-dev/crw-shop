import React from 'react';

import NavLink from 'components/NavLink';

import { IItem } from '../interfaces';

const Item = (props: IItem) => {
  const { image, name, slug, className } = props;

  return (
    <NavLink
      href={`/category/${slug}`}
      className={`flex justify-center items-center h-64 h-100 cursor-pointer group overflow-hidden mt-0 ml-2 mb-3 last:ml-2 ${className}`}
    >
      <div
        className="w-full h-full bg-center bg-cover group-hover:scale-125 motion-reduce:transition-none transition ease-out duration-1000"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="flex flex-col justify-center bg-white opacity-70 group-hover:opacity-90 absolute px-5 text-center">
        <h1 className="mt-2 text-xl mb-2.5">{name}</h1>
        <span className="font-light text-sm">COMPRE AGORA</span>
      </div>
    </NavLink>
  );
};

export default Item;
