// import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ smallPicture, bigPicture }) => {
  return (
    <li className="gallery-item">
      <img src={smallPicture} alt="" />
      {/* <Modal id={key} bigPicture={bigPicture} /> */}
    </li>
  );
};
