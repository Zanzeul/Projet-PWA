import { PropsWithChildren } from "react";

export const ApplicationLayout = (props: PropsWithChildren) => {
  return (
    <div
      className="h-screen w-screen grid"
      style={{
        gridTemplateAreas: `'header header' 'content content'`,
        gridTemplateColumns: "250px 1fr",
        gridTemplateRows: "60px 1fr",
      }}
    >
      {props.children}
    </div>
  );
};
