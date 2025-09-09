import { LoginForm } from '@components/organisms/LoginForm';
import oppIllustration from '@assets/illustrations/undraw_savings_uwjn.svg';

export const LoginTemplate = () => {
  return (
    <div className="w-full h-dvh bg-cream relative">
      <div className="absolute top-0 left-0 w-full lg:w-[60%] h-[40%] md:h-[50%] lg:h-full bg-primary/25" />
      <div className="relative max-w-screen-xl w-[90%] h-dvh mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-2/3 flex justify-center items-center">
          <img
            src={oppIllustration}
            className="max-w-xs md:max-w-sm lg:max-w-[325px] xl:max-w-full h-auto scale-90"
            alt="Illustration"
          />
        </div>
        <div className="w-full h-full lg:w-1/3 flex justify-center items-center relative">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
