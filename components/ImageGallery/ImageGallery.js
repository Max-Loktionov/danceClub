import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";

import style from "./ImageGallery.module.scss";

function ImageGallery({ gallery }) {
  return (
    <div>
      <ul className={style.gallery}>
        {gallery &&
          gallery.hits.map((item) => {
            return (
              <ImageGalleryItem
                url={item.webformatURL}
                urlLargeImg={item.largeImageURL}
                id={item.id}
                key={item.id}
                tags={item.tags}
              />
            );
          })}
      </ul>
    </div>
  );
}

// ImageGallery.propTypes = {
//   gallery: PropTypes.arrayOf(
//     PropTypes.shape({
//       url: PropTypes.string,
//       urlLargeImg: PropTypes.string,
//       id: PropTypes.number,
//       tags: PropTypes.string,
//     }).isRequired
//   ),
// };

export default ImageGallery;
