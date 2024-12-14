import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white p-2 " style={{ gridArea: "content" }}>
      {children}
    </div>
  );
};
