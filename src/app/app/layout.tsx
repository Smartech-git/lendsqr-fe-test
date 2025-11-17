import { ReactNode } from "react";

import SideNavWrapper from "@/components/layout/side-nav-wrapper";
import Header from "@/components/nav/header";
import SideNav from "@/components/nav/side-nav";
import { sideNavs } from "@/constants/side-nav";

interface Props {
  children: ReactNode;
}
export default function AppLayout({ children }: Props) {
  return (
    <div className='app-layout'>
      <Header />
      <div className='app-layout-content'>
        <SideNavWrapper>
          <SideNav navs={sideNavs} />
        </SideNavWrapper>
        {children}
      </div>
    </div>
  );
}
