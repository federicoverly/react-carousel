import { useState } from "react";
import { SlideImage } from "./SlideImage";
import styles from "./Slider.module.css";
import { Arrows } from "./Arrows";
import { Dots } from "./Dots";

export interface SliderProps {
  images: Image[];
}

export type Image = {
  title: string;
  image: string;
};

export const Slider = ({ images }: SliderProps) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log("rendering");
  return (
    <div className={styles.slider}>
      <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
      <Dots activeIndex={current} images={images} onClick={setCurrent} />
      {images.map((image, index) => {
        return (
          <div key={index}>
            {index === current && (
              <SlideImage image={image.image} title={image.title} />
            )}
          </div>
        );
      })}
    </div>
  );
};

Slider.displayName = "Slider";
