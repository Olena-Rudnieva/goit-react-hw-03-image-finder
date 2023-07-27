import { Modal } from '../Modal/Modal';
import { GalleryItem, GalleryItemPicture } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallPicture, bigPicture }) => {
  return (
    <GalleryItem>
      <GalleryItemPicture src={smallPicture} alt="" />
      <Modal bigPicture={bigPicture} />
    </GalleryItem>
  );
};
