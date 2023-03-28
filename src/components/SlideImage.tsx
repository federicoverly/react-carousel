import React from "react";
import styles from "./SlideImage.module.css";

interface SlideImageProps {
  title: string;
  image: string;
}

export const SlideImage = ({ title, image }: SlideImageProps) => {
  return <img src={image} alt={title} className={styles.image} />;
};

SlideImage.displayName = "SlideImage";
