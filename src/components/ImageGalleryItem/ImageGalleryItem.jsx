// import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ id, smallPicture, bigPicture }) => {
  return (
    <li className="gallery-item" key={id}>
      <img src={smallPicture} alt="" />
      {/* <Modal id={id} bigPicture={bigPicture} /> */}
    </li>
  );
};
