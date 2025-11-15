import Link from "next/link";

import { cn } from "@/lib/utils";

import ImageOptimize from "./image-optimize";

interface Props {
  action?: () => void;
  className?: string;
  shouldRoute?: boolean;
  wrapperClassName?: string;
}

export default function Logo({ action, className, shouldRoute = false, wrapperClassName }: Props) {
  const logoImage = <ImageOptimize webpSrc='/assets/logos/logo-725x150.webp'  alt='Lendsqr' width={725} height={150} className={cn("logo", className)} />;

  if (!shouldRoute) {
    return logoImage;
  }

  return (
    <Link onClick={action} href='/' className={cn(wrapperClassName)}>
      {logoImage}
    </Link>
  );
}
