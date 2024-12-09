import { PropsWithChildren } from "react";

export const ApplicationLayout = (props: PropsWithChildren) => {
  return (
    <div
      className="overflow-hidden h-screen w-screen grid grid-rows-[60px_1fr] md:grid-cols-[250px_1fr] md:grid-rows-[60px_1fr] [grid-template-areas:'header_header''content_content'] md:[grid-template-areas:'header_header''sidebar_content']"
    >
      {props.children}
    </div>
  );
};
