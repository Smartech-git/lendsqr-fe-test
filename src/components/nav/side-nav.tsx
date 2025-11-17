import LogOut from "@/components/content/auth/log-out";
import SideNavItem from "@/components/nav/side-nav-item";
import SwitchOrg from "@/components/nav/switch-org";
import { SideNav as SideNavTypes } from "@/constants/side-nav";

interface Props {
  navs: SideNavTypes[];
}

export default function SideNav({ navs }: Props) {
  return (
    <div className='side-nav-content'>
      <SwitchOrg />
      {navs.map((item, idx) => (
        <div key={idx} className='side-nav-content'>
          {item.title && <h1>{item.title}</h1>}
          <div className='side-nav-content'>
            {item.navs.map((item) => (
              <SideNavItem key={item.label} path={item.path} icon={item.icon} label={item.label} />
            ))}
          </div>
        </div>
      ))}
      <div className='side-nav-content-bottom side-nav-content'>
        <LogOut />
        <span>v1.2.0</span>
      </div>
    </div>
  );
}
