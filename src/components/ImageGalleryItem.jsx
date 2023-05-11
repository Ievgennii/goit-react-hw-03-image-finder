import React from 'react';
import css from './styles.module.css'

function ImageGalleryItem  ({ images })  {
  // console.log(images);
  return (
  <>
  
  {images.map(({ id, webformatURL, tags }) => (
      <li key={id} className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
      </li>
    ))}
  </>)
  
  };

export default ImageGalleryItem