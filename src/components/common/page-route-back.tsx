"use client";
import { useRouter } from "next/navigation";

import { Icon } from "@/components/icons";
import Button from "@/components/ui/button";

interface Props {
  label: string;
  route?: string;
}
export default function PageRouteBack({ label, route }: Props) {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    } else {
      router.back();
    }
  };

  return (
    <Button
      className="page-route-back"
      variant="flat"
      onClick={handleClick}
      startContent={<Icon name="icon-back" width={30} height={30} />}
    >
      {label}
    </Button>
  );
}
