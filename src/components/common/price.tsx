import getSymbolFromCurrency from "currency-symbol-map";
import React from "react";

import { cn, formatNumber } from "@/lib/utils";

type PriceProps = React.HTMLAttributes<HTMLParagraphElement> & {
  price: number;
};

const Price = React.forwardRef<HTMLDivElement, PriceProps>(({ price, className }, ref) => {
  return (
    <p ref={ref} className={cn("price", className)}>
      <span>{getSymbolFromCurrency("NGN" as unknown as string)}</span>
      <span>{formatNumber(price)}</span>
    </p>
  );
});

Price.displayName = "Price";

export default Price;
