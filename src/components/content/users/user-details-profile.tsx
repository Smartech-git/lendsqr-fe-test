import Price from "@/components/common/price";
import UserDetailsNav from "@/components/content/users/user-details-nav";
import { Icon } from "@/components/icons";
import Rating from "@/components/ui/rating";

export default function UserDetialsProfile() {
  return (
    <div className='user-details-profile card'>
      <div className='user-details-profile-content'>
        <div className='user-details-profile-img'>
          <Icon name='icon-user' width={40} height={40} />
        </div>
        {/* <div className='user-details-profile-description-box-mobile'>
          <h2>User' tier</h2>
          <Rating value={1} />
        </div> */}

        <div className='user-details-profile-description'>
          <div className='user-details-profile-description-box'>
            <h1>Grace Effiom</h1>
            <span>LSQFf587g90</span>
          </div>
          <div className='user-details-profile-description-box'>
            <h2>User' tier</h2>
            <Rating value={1} />
          </div>
          <div className='user-details-profile-description-box'>
            <Price price={200000} />
            <h3>{`9912345678/Providus Bank`}</h3>
          </div>
        </div>
      </div>
      <UserDetailsNav />
    </div>
  );
}
