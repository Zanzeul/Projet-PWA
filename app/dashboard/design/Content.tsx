import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white p-2 overflow-hidden" style={{ gridArea: "content" }}>
      <div className="h-full w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
