import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export const ImageGallery = ({ photos }) => {
  return (
    <ul className="gallery">
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            id={photo.id}
            smallPicture={photo.webformatURL}
            bigPicture={photo.largeImageURL}
          />
        );
      })}
      {/* <Button /> */}
    </ul>
  );
};
