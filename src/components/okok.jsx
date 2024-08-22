import React, { useState } from "react";

const Home = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignInClick = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="lg:h-screen">
      <div
        className={`transition-all duration-500 transform ${
          isSignIn ? "translate-x-full" : ""
        } awal bg-[#1A509A] flex flex-col justify-center items-center sm:px-[40px] fixed w-1/2 h-full`}
      >
        <div className="text-white">
          <div className="lg:pb-[13px] font-bold lg:text-[64px] md:text-[64px] md:pb-[13px] sm:text-[32px] sm:pt-[75px] sm:pb-[3px]">
            Welcome Back!
          </div>
          <div className="lg:pb-[48px] lg:px-[160px] lg:text-[20px] md:text-[20px] md:px-[120px] md:pb-[38px] sm:tex-[12px] sm:pb-[28px]">
            To keep connected with us please login with your personal info
          </div>
        </div>
        <div className="font-bold button-me xl:text-[20px] lg:text-[16px] md:text-[24px] sm:text-[14px] sm:pb-[98px] xs:text-[12px] s:text-[12px]">
          <button
            type="button"
            onClick={handleSignInClick}
            className="border border-[3px] transition text-white duration-300 ease-in-out transform hover:scale-110 hover:text-white rounded-[40px] xl:w-[120px] xl:h-[48px] lg:text-[24px] lg:w-[271px] lg:h-[68px] md:w-[271px] md:h-[68px] sm:w-[150px] sm:h-[38px] xs:w-[53px] xs:h-[24px] s:w-[53px] s:h-[24px]"
          >
            {isSignIn ? "SIGN UP" : "SIGN IN"}
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-500 transform ${
          isSignIn ? "-translate-x-full" : ""
        } akhir bg-white justify-center items-center flex flex-col lg:px-[105px] md:px-[50px] fixed w-1/2 h-full right-0`}
      >
        <div className="lg:pt-[124px] md:pt-[22px] sm:pt-[12px] text-[#1A509A] font-bold lg:text-[48px] md:text-[48px] sm:text-[24px]">
          {isSignIn ? "Login To Your Account" : "Create Account"}
        </div>
        <div className="flex justify-center gap-[40px] sm:gap-[27px] lg:pt-[15px] md:pt-[9px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
              className="sm:w-[25px] sm:h-[25px] md:w-[40px] md:h-[40px]"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
              className="sm:w-[25px] sm:h-[25px] md:w-[40px] md:h-[40px]"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
              className="sm:w-[25px] sm:h-[25px] md:w-[40px] md:h-[40px]"
            >
              <path
                fill="#0078d4"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
              ></path>
              <path
                d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                opacity=".05"
              ></path>
              <path
                d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                opacity=".07"
              ></path>
              <path
                fill="#fff"
                d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="font-bold text-[#ACACAC] lg:text-[20px] lg:pt-[30px] lg:text-[16px] md:text-[20px] md:pt-[30px] sm:text-[12px] md:pt-[22px] sm:pt-[12px]">
          {isSignIn
            ? "or use email for login"
            : "or use email for registration"}
        </div>
        <div className="sm:px-[52px] md:px-[95px] lg:pt-[4px] md:pt-[10px]">
          <form action="">
            <div className="grid lg:text-[20px] lg:gap-[22px] md:text-[20px] md:pt-[45px] md:gap-[22px] sm:text-[12px] sm:gap-[15px]">
              <div className="grid lg:gap-[10px] md:gap-[8px] sm:gap-[5px]">
                <div className="text-left font-bold text-[#0A66C2]">Email</div>
                <input
                  type="text"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  placeholder="enter your email"
                  className="lg:w-[579px] lg:h-[60px] lg:pl-[16px] md:w-[579] md:h-[60px] sm:w-[321] sm:h-[35px] sm:pl-[9px] text-[#0A66C2] border-[1px] rounded-[15px] border-[#0A66C2] outline-[#0A66C2]"
                />
              </div>
              <div className="grid lg:gap-[10px]">
                <div className="text-left font-bold text-[#0A66C2]">
                  Password
                </div>
                <input
                  type="text"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  placeholder={
                    isSignIn ? "enter your password" : "create your password"
                  }
                  className="lg:w-[579px] lg:h-[60px] lg:pl-[16px] md:w-[579] md:h-[60px] sm:w-[321] sm:h-[35px] sm:pl-[9px] text-[#0A66C2] border-[1px] rounded-[15px] border-[#0A66C2] outline-[#0A66C2]"
                />
              </div>
            </div>
            <div className="lg:pt-[46px] md:pt-[46px] sm:pt-[13px] sm:pb-[17px] font-bold button-me xl:text-[20px] lg:text-[16px] md:text-[24px] sm:text-[14px] xs:text-[12px] s:text-[12px]">
              <button
                type="submit"
                className="bg-[#4A77F5] transition text-white duration-300 ease-in-out transform hover:scale-110 hover:text-white rounded-[40px] xl:w-[120px] xl:h-[48px] lg:text-[24px] lg:w-[271px] lg:h-[68px] md:w-[271px] md:h-[68px] sm:w-[137px] sm:h-[44px] xs:w-[53px] xs:h-[24px] s:w-[53px] s:h-[24px]"
              >
                {isSignIn ? "SIGN IN" : "SIGN UP"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
