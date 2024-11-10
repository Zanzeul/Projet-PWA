import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gray-200" style={{ gridArea: "content" }}>
      {children}
    </div>
  );
};
