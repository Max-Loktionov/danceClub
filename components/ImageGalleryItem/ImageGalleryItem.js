import { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Modal from "../Modal";
import style from "./imageGalleryItem.module.scss";

function ImageGalleryItem(props) {
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id, url, tags, urlLargeImg } = props;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setData(data);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);
  return (
    <li key={id} className={style.item}>
      <Image
        src={url}
        alt={tags}
        className={style.image}
        width={400}
        height={400}
        onClick={() => openModal(props)}
      />
      {isModalOpen && (
        <Modal onClose={toggleModal} isModalOpen={isModalOpen}>
          <img src={urlLargeImg} alt={tags} />
        </Modal>
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  urlLargeImg: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
