import ImageOptimize from "@/components/common/image-optimize";
import Logo from "@/components/common/logo";
import SignInForm from "@/components/content/auth/sign-in-form";

export default function Auth() {
  return (
    <div className='auth-wrapper'>
      <Logo />
      <div className='auth-content'>
        <ImageOptimize webpSrc='/assets/images/auth/auth-1044x676.webp' width={1044} height={676} alt='Pablo sign in' />
        <div className='auth-form-wrapper'>
          <div className='auth-form-title'>
            <h1>Welcome!</h1>
            <p>Enter detials to login</p>
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
