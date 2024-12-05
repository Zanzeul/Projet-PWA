import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { LayoutGrid, Film, Users, Smile, Airplay} from "lucide-react"

export const Sidebar = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  return (
    <div className="bg-white w-full h-full border-r border-black flex flex-col pt-3" style={{ gridArea: "sidebar" }}>
      <button className = "text-xl flex justify-start p-2"><LayoutGrid></LayoutGrid> Discover</button>
      <p className = "text-gray-400 pl-2">Movies </p>
      <button onClick = { () => {router.push("/dashboard/movies/now-playing")}} className = "text-xl flex justify-start p-2"><Film></Film> Now-playing</button>
      <button onClick = { () => {router.push("/dashboard/movies/popular")}} className = "text-xl flex justify-start p-2"><Users></Users> Popular</button>
      <button onClick = { () => {router.push("/dashboard/movies/top-rated")}} className = "text-xl flex justify-start p-2"><Smile></Smile> Top-rated</button>
      <p className = "text-gray-400 pl-2">Shows </p>
      <button onClick = { () => {router.push("/dashboard/shows/on-the-air")}} className = "text-xl flex justify-start p-2"><Airplay></Airplay> On-the-air</button>
      <button onClick = { () => {router.push("/dashboard/shows/popular")}} className = "text-xl flex justify-start p-2"><Users></Users> Popular</button>
      <button onClick = { () => {router.push("/dashboard/shows/top-rated")}} className = "text-xl flex justify-start p-2"><Smile></Smile> Top-rated</button>
      {children}
    </div>
  );
};
