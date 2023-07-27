import { Overlay, ModalPicture } from './Modal.styled';

export const Modal = ({ bigPicture }) => {
  return (
    <Overlay>
      <ModalPicture>
        <img src={bigPicture} alt="" />
      </ModalPicture>
    </Overlay>
  );
};
