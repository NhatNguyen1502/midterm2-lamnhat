import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  const [currentIndexImage, setCurrentIndexImage] = React.useState(0);

  const onLeftClick = () => {
    if (currentIndexImage == 0) {
      setCurrentIndexImage(images.length - 1);
    } else setCurrentIndexImage(currentIndexImage - 1);
  };

  const onRightClick = () => {
    if (currentIndexImage == images.length - 1) {
      setCurrentIndexImage(0);
    } else setCurrentIndexImage(currentIndexImage + 1);
  };


  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={onLeftClick} />

      <img src={images[currentIndexImage].src} alt={images[currentIndexImage].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={onRightClick} />
    </div>
  );
};



