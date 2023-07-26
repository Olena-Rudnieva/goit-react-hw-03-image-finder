import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export const ImageGallery = () => {
  return (
    <ul className="gallery">
      <ImageGalleryItem />
      <Button />
    </ul>
  );
};
