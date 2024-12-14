import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { LayoutGrid, Film, Users, Smile, Airplay } from "lucide-react";
import { useDarkModeContext } from "@/app/context/DarkModeContext";

export const Sidebar = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const {darkMode}  = useDarkModeContext()
  return (
    <div className={`${
      darkMode.etat ? 'bg-gray-600 text-white' : 'bg-white'
  } `}>
      {/* Sidebar pour écran PC */}
      <div
        className={`${
          darkMode.etat ? 'bg-gray-600 text-white' : 'bg-white'
      } hidden md:flex w-full h-full border-r border-black flex-col pt-3`}
        style={{ gridArea: "sidebar" }}
      >
        <button
          onClick={() => router.push("/dashboard/discover")}
          className="text-xl flex justify-start p-2"
        >
          <LayoutGrid /> Discover
        </button>
        <p className="text-gray-400 pl-2">Movies</p>
        <button
          onClick={() => router.push("/dashboard/movies/now-playing")}
          className="text-xl flex justify-start p-2"
        >
          <Film /> Now-playing
        </button>
        <button
          onClick={() => router.push("/dashboard/movies/popular")}
          className="text-xl flex justify-start p-2"
        >
          <Users /> Popular
        </button>
        <button
          onClick={() => router.push("/dashboard/movies/top-rated")}
          className="text-xl flex justify-start p-2"
        >
          <Smile /> Top-rated
        </button>
        <p className="text-gray-400 pl-2">Shows</p>
        <button
          onClick={() => router.push("/dashboard/shows/on-the-air")}
          className="text-xl flex justify-start p-2"
        >
          <Airplay /> On-the-air
        </button>
        <button
          onClick={() => router.push("/dashboard/shows/popular")}
          className="text-xl flex justify-start p-2"
        >
          <Users /> Popular
        </button>
        <button
          onClick={() => router.push("/dashboard/shows/top-rated")}
          className="text-xl flex justify-start p-2"
        >
          <Smile /> Top-rated
        </button>
        {children}
      </div>

      {/* Sidebar pour écran mobile */}
      <div className={`${
          darkMode.etat ? 'bg-gray-600 text-white' : 'bg-white'
      } overflow-hidden lg:hidden fixed bottom-0 left-0 right-0 border-t border-black py-2`}>
        <div className="flex justify-around items-center text-xs">
          {/* Section Discover */}
          <button
            onClick={() => router.push("/dashboard/discover")}
            className="flex flex-col items-center"
          >
             <span>Discover</span>
            <LayoutGrid size={24} />
           
          </button>

          {/* Section Movies */}
          <div className="flex flex-col items-center">
            <span className="text-gray-400">Movies</span>
            <div className="flex space-x-2">
              <button
                onClick={() => router.push("/dashboard/movies/now-playing")}
                className="flex items-center"
              >
                <Film size={24} />
              </button>
              <button
                onClick={() => router.push("/dashboard/movies/popular")}
                className="flex items-center"
              >
                <Users size={24} />
              </button>
              <button
                onClick={() => router.push("/dashboard/movies/top-rated")}
                className="flex items-center"
              >
                <Smile size={24} />
              </button>
            </div>
          </div>

          {/* Section Shows */}
          <div className="flex flex-col items-center">
            <span className="text-gray-400">Shows</span>
            <div className="flex space-x-2">
              <button
                onClick={() => router.push("/dashboard/shows/on-the-air")}
                className="flex items-center"
              >
                <Airplay size={24} />
              </button>
              <button
                onClick={() => router.push("/dashboard/shows/popular")}
                className="flex items-center"
              >
                <Users size={24} />
              </button>
              <button
                onClick={() => router.push("/dashboard/shows/top-rated")}
                className="flex items-center"
              >
                <Smile size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
