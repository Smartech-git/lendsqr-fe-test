"use client";

import { useState } from "react";

import Logo from "@/components/common/logo";
import { Icon } from "@/components/icons";
import Button from "@/components/ui/button";
import { Sheet, SheetHeader, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { sideNavs } from "@/constants/side-nav";

import SideNav from "./side-nav";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='flat' size='fit'>
          <Icon name='icon-menu' width={40} height={40} />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' hideClose={false} style={{ pointerEvents: "auto" }}>
        <SheetHeader>
          <Logo action={closeMenu} />
          <SheetTitle className='hidden'>Mobile Menu</SheetTitle>
        </SheetHeader>
        <div className='mobile-nav-wrapper'>
          <SideNav navs={sideNavs} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
