import Image from "next/image";
import SignOutButton from "../api/auth/SignOutButton";

export default function Home3() {
  return (
    <div className="bg-gray-500 w-full h-screen flex justify-center items-center">
      
      <div className="text-white font-bold ">
        
        <p>This is a magic link auth page</p>
        
        <SignOutButton/>
        
      </div>

    </div>
  );
}
