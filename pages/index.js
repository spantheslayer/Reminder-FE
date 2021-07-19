import Head from "next/head";
// import Link from "next/link";

// Custom Component
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import EmailVerification from "../components/EmailVerification";
import Reminder from "../components/Reminder";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Reminder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#171717]">
        {/* <SignUp /> */}
        {/* <Login /> */}
        <EmailVerification />
        {/* <Reminder /> */}
      </main>
    </div>
  );
}
