import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

export interface ImageOptimizeProps extends Omit<ImageProps, "src"> {
  webpSrc: string;
  fallbackSrc?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImageOptimize({ webpSrc, fallbackSrc, alt, width, height, className, ...imageProps }: ImageOptimizeProps) {
  const fallback = fallbackSrc || webpSrc.replace(/\.webp$/i, ".png");

  return (
    <picture>
      <source srcSet={webpSrc} type='image/webp' />
      <Image src={fallback} alt={alt} width={width} height={height} className={cn(className)} {...imageProps} />
    </picture>
  );
}
