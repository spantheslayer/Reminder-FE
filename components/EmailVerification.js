import { ExclamationCircleIcon } from "@heroicons/react/solid";

function EmailVerification() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <div>
        <h1 className="text-white pb-2 px-2">Email Verification Code</h1>
        <div className="flex items-center rounded-2xl bg-[#EDEDED] px-3 p-2">
          <ExclamationCircleIcon className="h-5 mr-4 text-[#444444]" />
          <input type="code" placeholder="eg : 982442" className="outline-none bg-[#EDEDED] placeholder-[#444444] w-56 " />
        </div>
      </div>
      <p className="text-gray-400 pt-4 ">An email verification code has been sent to your email address.</p>
      <p className="text-gray-400 pt-1 ">Please use that code to verify yourself. </p>
      <button className="bg-[#F8D49D] rounded-lg p-2 px-4 mt-8">Login</button>
    </div>
  );
}

export default EmailVerification;
