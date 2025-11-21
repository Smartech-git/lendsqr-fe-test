"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import Button from "@/components/ui/button";
import { userDetailsNavs } from "@/constants/user-details-nav";
import { cn } from "@/lib/utils";

export default function UserDetailsNav() {
  const pathname = usePathname();
  const [, baseRoute, subRoute, id, ...childPaths] = pathname.split("/");
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const subPath = childPaths.join("/") || "/";

  const active = (path: string) => subPath.startsWith(path);

  const scrollToNextButton = (currentIndex: number) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < userDetailsNavs.length && buttonRefs.current[nextIndex]) {
      buttonRefs.current[nextIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  };

  return (
    <div className='user-details-nav-wrapper'>
      <div className='user-details-nav'>
        {userDetailsNavs.map((item, idx) => (
          <Link 
            key={item.label} 
            href={idx === 0 ? `/${baseRoute}/${subRoute}/${id}` : `/${baseRoute}/${subRoute}/${id}/${item.path}`}
            ref={(el) => { buttonRefs.current[idx] = el; }}
          >
            <Button 
              variant='flat' 
              className={cn("user-details-nav-btn", active(item.path) && "active")}
              onClick={() => scrollToNextButton(idx)}
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
