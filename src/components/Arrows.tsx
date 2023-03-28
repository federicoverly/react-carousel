import React from "react";
import styles from "./Arrows.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface ArrowsProps {
  prevSlide: () => void;
  nextSlide: () => void;
}

export const Arrows = ({ prevSlide, nextSlide }: ArrowsProps) => {
  return (
    <div className={styles.arrows}>
      <FaChevronLeft className={styles.previous} onClick={prevSlide} />
      <FaChevronRight className={styles.next} onClick={nextSlide} />
    </div>
  );
};

Arrows.displayName = "Arrows";
