
import { PropsWithChildren } from "react";

export const ApplicationLayout = (props: PropsWithChildren) => {
  return (
    <div
      className="
        h-screen w-screen grid 
        grid-rows-[10%_78%_auto]   /* Par défaut, 60px pour le header, reste pour le contenu, et une ligne pour la sidebar */
        md:grid-cols-[250px_1fr]   /* Sur desktop, sidebar à gauche */
        md:grid-rows-[60px_1fr]    /* Sur desktop, pas de ligne pour la sidebar en bas */
        [grid-template-areas:'header''content''sidebar'] 
        md:[grid-template-areas:'header_header''sidebar_content']"
    >
      {props.children}
    </div>
  );
};
