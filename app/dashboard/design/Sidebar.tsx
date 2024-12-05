import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white w-full h-full border-r border-black flex flex-col pt-3" style={{ gridArea: "sidebar" }}>
      <button className = "text-xl flex justify-start p-2">🔳Discover</button>
      <p className = "text-gray-400 pl-2">Movies </p>
      <button className = "text-xl flex justify-start p-2">🎞️Now-playing</button>
      <button className = "text-xl flex justify-start p-2">👥Popular</button>
      <button className = "text-xl flex justify-start p-2">☺Top-rated</button>
      <p className = "text-gray-400 pl-2">Shows </p>
      <button className = "text-xl flex justify-start p-2">📺On-the-air</button>
      <button className = "text-xl flex justify-start p-2">👥Popular</button>
      <button className = "text-xl flex justify-start p-2">☺Top-rated</button>
      {children}
    </div>
  );
};
