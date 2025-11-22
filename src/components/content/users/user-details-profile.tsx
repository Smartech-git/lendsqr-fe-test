import Price from "@/components/common/price";
import UserDetailsNav from "@/components/content/users/user-details-nav";
import { Icon } from "@/components/icons";
import Rating from "@/components/ui/rating";
import { userProfileData } from "@/app/app/users/variables";

export default function UserDetialsProfile() {
  const { fullName, userId, userTier, accountBalance, accountNumber, bankName } = userProfileData;

  return (
    <div className='user-details-profile card'>
      <div className='user-details-profile-content'>
        <div className='user-details-profile-img'>
          <Icon name='icon-user' width={40} height={40} />
        </div>
        <div className='user-details-profile-description'>
          <div className='user-details-profile-description-box'>
            <h1>{fullName}</h1>
            <span>{userId}</span>
          </div>
          <div className='user-details-profile-description-box'>
            <h2>User' tier</h2>
            <Rating value={userTier} />
          </div>
          <div className='user-details-profile-description-box'>
            <Price price={accountBalance} />
            <h3>{`${accountNumber}/${bankName}`}</h3>
          </div>
        </div>
      </div>
      <UserDetailsNav />
    </div>
  );
}
