import { ReactNode } from "react";

import PageRouteBack from "@/components/common/page-route-back";
import PageTitle from "@/components/common/page-title";
import UserDetialsProfile from "@/components/content/users/user-details-profile";
import Button from "@/components/ui/button";

interface Props {
  children: ReactNode;
}
export default function UserDetailsLayout({ children }: Props) {
  return (
    <>
      <div className='user-details-header'>
        <PageRouteBack route='/app/users' label='Back to users' />
        <div className='user-details-header-title'>
          <PageTitle title='Users details' />
          <div className='users-details-heaader-btns'>
            <Button size='md' variant='outlined'>
              Blacklist User
            </Button>
            <Button size='md' variant='outlined'>
              Activate User
            </Button>
          </div>
        </div>
      </div>

      <UserDetialsProfile />
      <div className='card users-details-layout-children'>{children}</div>
    </>
  );
}
