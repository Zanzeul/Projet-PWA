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
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-black py-3 space-y-2">
        <div className="flex justify-evenly items-center">
          {/* Bouton Discover */}
          <button
            onClick={() => router.push("/dashboard/discover")}
            className="flex flex-col items-center text-xl"
          >
            <LayoutGrid />
            <span className="text-xs">Discover</span>
          </button>
        </div>

        <div>
          <div className="w-full text-center text-gray-400">Movies</div>
          <div className="flex justify-evenly w-full">
            <button
              onClick={() => router.push("/dashboard/movies/now-playing")}
              className="flex flex-col items-center text-xl"
            >
              <Film />
              <span className="text-xs">Now-playing</span>
            </button>
            <button
              onClick={() => router.push("/dashboard/movies/popular")}
              className="flex flex-col items-center text-xl"
            >
              <Users />
              <span className="text-xs">Popular</span>
            </button>
            <button
              onClick={() => router.push("/dashboard/movies/top-rated")}
              className="flex flex-col items-center text-xl"
            >
              <Smile />
              <span className="text-xs">Top-rated</span>
            </button>
          </div>
        </div>

        <div>
          <div className="w-full text-center text-gray-400 mt-2">Shows</div>
          <div className="flex justify-evenly w-full">
            <button
              onClick={() => router.push("/dashboard/shows/on-the-air")}
              className="flex flex-col items-center text-xl"
            >
              <Airplay />
              <span className="text-xs">On-the-air</span>
            </button>
            <button
              onClick={() => router.push("/dashboard/shows/popular")}
              className="flex flex-col items-center text-xl"
            >
              <Users />
              <span className="text-xs">Popular</span>
            </button>
            <button
              onClick={() => router.push("/dashboard/shows/top-rated")}
              className="flex flex-col items-center text-xl"
            >
              <Smile />
              <span className="text-xs">Top-rated</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
