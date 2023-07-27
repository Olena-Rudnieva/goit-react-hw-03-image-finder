import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { Button } from '../Button/Button';

export const ImageGallery = ({ photos, onLoadMore }) => {
  return (
    <>
      <Gallery>
        {photos.map(photo => {
          return (
            <ImageGalleryItem
              key={photo.id}
              smallPicture={photo.webformatURL}
              bigPicture={photo.largeImageURL}
            />
          );
        })}
      </Gallery>
      <Button onLoadMore={onLoadMore} />
    </>
  );
};
