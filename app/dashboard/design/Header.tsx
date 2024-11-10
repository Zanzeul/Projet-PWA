import { PropsWithChildren } from "react";

export const Header = (props: PropsWithChildren) => {
  return (
    <div className="bg-white flex justify-between items-center p-3 text-3xl border-b border-black" style={{ gridArea: "header" }}>
      {props.children}
    </div>
  );
};
