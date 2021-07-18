import Head from "next/head";

// Custom Component
import SignUp from "../components/SignUp";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Reminder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-[#171717]">
        <h1 className="text-[#F8D49D]  text-3xl sm:text-4xl mb-14 ">Sign Up To Set Reminder !!</h1>
        <SignUp />
        <button className="bg-[#F8D49D] rounded-lg p-2 px-4">Sign Up</button>
        <a href="" className="pt-4 text-gray-400 underline">
          forgot password ?
        </a>
      </main>
    </div>
  );
}
