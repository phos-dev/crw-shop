import { IItem } from '../interfaces';
import Item from './Item';

type IGalleryProps = {
  items: Array<IItem>;
};

const Gallery = (props: IGalleryProps) => {
  const { items } = props;

  return (
    <div className="flex w-full flex-wrap">
      {items.map((item, key) => (
        <Item key={key} {...item} />
      ))}
    </div>
  );
};

export default Gallery;
