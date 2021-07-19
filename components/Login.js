// Icons
import { AtSymbolIcon } from "@heroicons/react/outline";
import { EyeOffIcon, LockOpenIcon } from "@heroicons/react/solid";

function signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <h1 className="text-[#F8D49D]  text-3xl sm:text-4xl mb-10 ">Login To Set Reminder !!</h1>
      {/* Email */}
      <div className="flex-col space-y-0">
        <h1 className="text-white pb-2 px-2">Email Address</h1>
        <div className="flex items-center rounded-2xl bg-[#EDEDED] px-3 p-2 mt-7 active:border-b-2 active:border-blue-400">
          <AtSymbolIcon className="h-4 mr-4 text-[#444444]" />
          <input type="email" placeholder="durbin@gmail.com" className="outline-none bg-[#EDEDED] placeholder-[#444444] w-56 " />
        </div>
      </div>

      {/* Password */}
      <div className="flex-col space-y-0 pt-6">
        <h1 className="text-white pb-2 px-2">Password</h1>
        <div className="flex items-center rounded-2xl bg-[#EDEDED] px-3 p-2 mt-7 active:border-b-2 active:border-blue-400">
          <LockOpenIcon className="h-5 mr-4 text-[#444444]" />
          <input type="password" placeholder="Min 8 characters" className="outline-none bg-[#EDEDED] placeholder-[#444444] w-52 " />
          <EyeOffIcon className="h-4 text-[#444444]" />
        </div>
      </div>
      <button className="bg-[#F8D49D] rounded-lg p-2 px-4 mt-8">Login</button>
      <a href="" className=" text-gray-400 underline pt-4">
        forgot password ?
      </a>
    </div>
  );
}

export default signup;
