"use client";

import ReactStarsRating, { ReactStarsRatingProps } from "react-awesome-stars-rating";

export default function Rating({ value = 3, secondaryColor = "#545f7d26", count = 3, starGap = 4, size = 16, onChange, ...props }: ReactStarsRatingProps) {
  return <ReactStarsRating  secondaryColor={secondaryColor} value={value} onChange={onChange} starGap={starGap} size={size} count={count} {...props} />;
}
