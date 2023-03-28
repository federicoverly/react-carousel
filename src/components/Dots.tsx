import React from "react";
import type { Image } from "./Slider";
import styles from "./Dots.module.css";

export function classNames(
  ...classNames: (string | false | undefined | null)[]
) {
  return classNames.filter(Boolean).join(" ");
}

export interface DotsProps {
  images: Image[];
  activeIndex: number;
  onClick: (index: number) => void;
}

export const Dots = ({ images, activeIndex, onClick }: DotsProps) => {
  return (
    <div className={styles.allDots}>
      {images.map((slide, index) => (
        <span
          key={index}
          className={classNames(
            styles.dot,
            activeIndex === index && styles.activeDot
          )}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

Dots.displayName = "Dots";
