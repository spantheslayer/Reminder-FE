// Icons
import { AtSymbolIcon } from "@heroicons/react/outline";
import { EyeOffIcon, LockOpenIcon, UserIcon } from "@heroicons/react/solid";

function signup() {
  return (
    <div className="flex flex-col items-center py-6">
      {/* Name */}
      <div className="flex items-center rounded-2xl bg-[#EDEDED] px-3 p-2">
        <UserIcon className="h-5 mr-4 text-[#444444]" />
        <input type="name" placeholder="Durbin Technologies" className="outline-none bg-[#EDEDED] placeholder-[#444444] w-56 " />
      </div>

      {/* Email */}
      <div className="flex items-center rounded-2xl bg-[#EDEDED] px-3 p-2 mt-7">
        <AtSymbolIcon className="h-5 mr-4 text-[#444444]" />
        <input type="email" placeholder="Email Address" className="outline-none bg-[#EDEDED] placeholder-[#444444] w-56 " />
      </div>

      {/* Password */}
      <div className="flex items-center rounded-2xl bg-[#EDEDED] px-3 p-2 mt-7">
        <LockOpenIcon className="h-5 mr-4 text-[#444444]" />
        <input type="password" placeholder="Password" className="outline-none bg-[#EDEDED] placeholder-[#444444] w-52 " />
        <EyeOffIcon className="h-4 text-[#444444]" />
      </div>
    </div>
  );
}

export default signup;
