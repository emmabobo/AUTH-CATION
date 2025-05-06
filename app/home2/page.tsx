import Image from "next/image";

export default function Home2() {
  return (
    <div className="bg-gray-500 w-full h-screen flex justify-center items-center">
      
      <div className="text-white font-bold ">
        
        <p>This is a Auth page</p>
        <div>
          <p>Login with Magic link </p>
          
        </div>
        
        <button>Logging with Google</button>
        <button>Logging with Github</button>
      </div>

    </div>
  );
}
