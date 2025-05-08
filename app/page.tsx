import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleSignIn from "./api/auth/GoogleSignIn";
import GithubSignIn from "./api/auth/GithubSignin";


export default function Home() {
  return (
    <div className="bg-gray-500 w-full h-screen flex justify-center items-center">
      
      <div className="text-white font-bold ">
        
        <p>This is a Auth page</p>
        <div className="flex flex-col gap-2">
          <p>Login with Magic link </p>

          <GoogleSignIn/>
          <GithubSignIn/>

        </div>
        
      </div>

    </div>
  );
}
