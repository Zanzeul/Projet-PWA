import { PropsWithChildren } from "react";
import { useDarkModeContext } from "@/app/context/DarkModeContext";
import { Switch } from "@/components/ui/switch"
import { Moon, Sun } from "lucide-react";
import { Label } from "@/components/ui/label"

export const Header = (props: PropsWithChildren) => {
  const {darkMode, setEtat}  = useDarkModeContext()
  return (
    <div className={`${
      darkMode.etat ? 'bg-gray-600 text-white' : 'bg-white'
  } flex justify-between items-center p-3 text-3xl border-b border-black`} style={{ gridArea: "header" }}>
      <div>{props.children}</div>
      <div className="flex items-center space-x-2">
      <Switch
          id="dark-mode"
          checked={darkMode.etat}
          onCheckedChange={(checked) => setEtat(checked)}
        />
      {darkMode.etat ? <Moon /> : <Sun />}
      </div>
    </div>
  );
};
