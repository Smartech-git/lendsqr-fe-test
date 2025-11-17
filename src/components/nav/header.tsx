import React from "react";

import Logo from "@/components/common/logo";
import MobileMenu from "@/components/nav/mobile-menu";
import Notification from "@/components/nav/notification";
import Search from "@/components/nav/search";
import User from "@/components/nav/user";
import Button from "@/components/ui/button";
import { sideNavs } from "@/constants/side-nav";

export default function Header() {
  return (
    <div className='header'>
      <div className='header-logo-wrapper'>
        <Logo />
        <MobileMenu />
      </div>
      <Search />
      <div className='header-end-content'>
        <Button className='btn-link-underline header-btn-docs' variant='link'>
          Docs
        </Button>
        <Notification />
        <User name='Adedeji' />
      </div>
    </div>
  );
}
