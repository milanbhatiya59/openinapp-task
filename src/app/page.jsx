import SignInImage from "../app/_components/signInImage";
import LoginForm from "../app/_components/LoginForm";
import SignInLogos from "../app/_components/SigninLogos";
import ToggleSwitch from "../app/_components/toggleButton"
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-100 dark:bg-dark">
      {/* <div className="absolute bottom-20 left-[21vh] z-20">
        <ToggleButton />
      </div> */}

      <div className="w-full lg:w-1/2 md:flex items-center justify-center my-3 hidden lg:block">
        <div className="relative w-full h-full">
          <SignInImage />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center my-auto dark:bg-dark dark:text-white">
        <div className="absolute top-4 right-6">
          <ToggleSwitch />
          <div className="flex items-center justify-center font-semibold">
            Theme
          </div>
        </div>
        <div >
          <div className="text-4xl font-bold mb-2 dark:bg-dark dark:text-white">
            Sign In
          </div>
          <div className="text-lg font-semibold mb-6 dark:bg-dark dark:text-white">
            Sign in to your account
          </div>
          <div className="flex mb-6">
            <div className="md:mr-6 sm:mr-2 flex bg-white dark:bg-black rounded-xl p-[6px]">
              <Image
                src="/googlelogin.svg"
                alt="Google login"
                width={15.37}
                height={15.37}
              />
              <div className="ml-2 flex items-center justify-center text-slate-500 text-sm font-bold">
                Sign in with Google
              </div>
            </div>
            <div className="flex bg-white dark:bg-black rounded-xl p-[6px]">
              <Image
                src="/applelogin.svg"
                alt="Apple login"
                width={15.37}
                height={15.37}
              />
              <div className="ml-2 flex items-center justify-center text-slate-500 text-sm font-bold">
                Sign in with Apple
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <LoginForm />
          </div>
          <div className="flex mt-24 justify-center">
            <SignInLogos />
          </div>
        </div>
      </div>
    </div>
  );
}
