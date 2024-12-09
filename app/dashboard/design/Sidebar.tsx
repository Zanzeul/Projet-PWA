import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { LayoutGrid, Film, Users, Smile, Airplay } from "lucide-react";

export const Sidebar = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  return (
    <div>
      {/* Sidebar pour écran PC */}
      <div
        className="hidden lg:flex bg-white w-full h-full border-r border-black flex-col pt-3"
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
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-black py-3">
        <div className="flex flex-col items-center space-y-2">
          {/* Bouton Discover */}
          <button
            onClick={() => router.push("/dashboard/discover")}
            className="flex items-center"
          >
            <LayoutGrid size={28} />
          </button>

          {/* Section Movies */}
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-xs mb-1">Movies</p>
            <div className="flex space-x-4">
              <button
                onClick={() => router.push("/dashboard/movies/now-playing")}
                className="flex items-center"
              >
                <Film size={28} />
              </button>
              <button
                onClick={() => router.push("/dashboard/movies/popular")}
                className="flex items-center"
              >
                <Users size={28} />
              </button>
              <button
                onClick={() => router.push("/dashboard/movies/top-rated")}
                className="flex items-center"
              >
                <Smile size={28} />
              </button>
            </div>
          </div>

          {/* Section Shows */}
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-xs mb-1">Shows</p>
            <div className="flex space-x-4">
              <button
                onClick={() => router.push("/dashboard/shows/on-the-air")}
                className="flex items-center"
              >
                <Airplay size={28} />
              </button>
              <button
                onClick={() => router.push("/dashboard/shows/popular")}
                className="flex items-center"
              >
                <Users size={28} />
              </button>
              <button
                onClick={() => router.push("/dashboard/shows/top-rated")}
                className="flex items-center"
              >
                <Smile size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
