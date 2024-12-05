import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white overflow-hidden p-2" style={{ gridArea: "content" }}>
      {children}
    </div>
  );
};
