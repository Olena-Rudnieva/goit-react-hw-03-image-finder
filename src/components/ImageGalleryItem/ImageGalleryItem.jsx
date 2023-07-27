// import { Modal } from '../Modal/Modal';
import { GalleryItem, GalleryItemPicture } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallPicture, bigPicture }) => {
  return (
    <GalleryItem className="gallery-item">
      <GalleryItemPicture src={smallPicture} alt="" />
      {/* <Modal id={key} bigPicture={bigPicture} /> */}
    </GalleryItem>
  );
};
