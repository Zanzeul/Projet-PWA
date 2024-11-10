import { PropsWithChildren } from "react";

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white w-full h-full border-r border-black flex flex-col pt-3" style={{ gridArea: "sidebar" }}>
      <h2 className = "text-xl pl-4">🔳Discover</h2>
      <p className = "text-gray-400">Movies </p>
      <h2 className = "text-xl pl-4">🎞️Now-playing</h2>
      <h2 className = "text-xl pl-4">👥Popular</h2>
      <h2 className = "text-xl pl-4">☺Top-rated</h2>
      <p className = "text-gray-400">Shows </p>
      <h2 className = "text-xl pl-4">📺On-the-air</h2>
      <h2 className = "text-xl pl-4">👥Popular</h2>
      <h2 className = "text-xl pl-4">☺Top-rated</h2>
      {children}
    </div>
  );
};
