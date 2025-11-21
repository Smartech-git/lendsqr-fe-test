declare module "react-awesome-stars-rating" {
  import { ComponentType } from "react";

  export interface ReactStarsRatingProps {
    value?: number;
    onChange?: (value: number) => void;
    count?: number;
    size?: number;
    starGap?: number;
    isHalf?: boolean;
    isEdit?: boolean;
    primaryColor?: string;
    secondaryColor?: string;
    className?: string;
    char?: string;
    emoji?: string;
  }

  const ReactStarsRating: ComponentType<ReactStarsRatingProps>;
  export default ReactStarsRating;
}
