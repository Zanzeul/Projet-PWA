import { PropsWithChildren } from "react";
import { useDarkModeContext } from "@/app/context/DarkModeContext"


export const Content = ({ children }: PropsWithChildren) => {
  const {darkMode}  = useDarkModeContext()
  return (
    <div className={`${
      darkMode.etat ? 'bg-gray-600 text-white' : 'bg-white'
  } p-2 overflow-hidden `} style={{ gridArea: "content" }}>
      <div className="h-full w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
